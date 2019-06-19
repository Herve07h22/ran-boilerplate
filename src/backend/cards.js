// lambda/airtable.js
const Airtable = require('airtable')

Airtable.configure({
  endpointUrl: 'https://api.airtable.com',
  apiKey: process.env.AIRTABLE_KEY
})
const base = Airtable.base('appUp4b4ceY4U2QPq')

// Contrôle de la bonne authentification de l'utilisateur
const checkAuth = context => {
    return new Promise((resolve, reject) => {
      // Reading the context.clientContext will give us the current user
      const user = context.clientContext && context.clientContext.user
      if (!user) {
        console.log('Utilisateur non authentifié!')
        return reject('Echec authentification')
      }
      console.log('user', user)
      return resolve(user)
    })
}

// Airtable query 
const query = (userEmail, view) => {
    const allRecords = []
    const userIsInRecords = records => records.some( r => r['Email'] === userEmail ) ? records : []

    return new Promise( (resolve, reject) =>
        base(view)
            .select({
            maxRecords: 100,
            view: 'Grid view'
            })
            .eachPage(
                // Traitement de chaque page
                (records, fetchNextPage) => {
                    records.forEach( record => { 
                        //console.log('Retrieved', record.fields)
                        if (record.get('Validé')) allRecords.push(record.fields) 
                    })
                    fetchNextPage()
                },
                // Callback de fin, avec contrôle de la validation 
                err => err ? reject(err) : resolve(userIsInRecords(allRecords)) 
            )
    )

}

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Max-Age': '2592000',
  }

exports.handler = (event, context, callback) => {
    
    /*
    query('contact@camilab.co', "Membres")
        .then( records => callback(null, {
            statusCode: 200,
            body: JSON.stringify({ data: records })
            })
        )
        .catch( error => callback(null, {  statusCode: 401, body: JSON.stringify({ error }) } ))
    */

    // Pre-flight request
    if (event.httpMethod === 'OPTIONS') {
        return  callback(null, { statusCode: 204, headers, body:'' })
    }


    // Use the event data auth header to verify
    
    checkAuth(context).then((user) => {
        console.log('user', user)
        query(user.email, "Membres")
        .then( records => callback(null, {
            statusCode: 200,
            headers,
            body: JSON.stringify({ data: records })
            })
        )
    })
    .catch( error => {
        console.log('error', error)
        // return error back to app
        return callback(null, {
            statusCode: 401,
            headers,
            body: JSON.stringify({ error })
        } )
    })

  }
