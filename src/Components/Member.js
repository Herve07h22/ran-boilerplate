import React from 'react'

import Tag from './Tag'

const Member = ({member}) => {
    return (
        
        <div className="block max-w-sm w-full lg:flex p-2">
  
            <div className="border-r border-b border-l border-gray-400  bg-white rounded shadow-md p-4 flex flex-col justify-between leading-normal">
                <div className="mb-8">
                
                    <div className="text-gray-900 font-bold text-xl ">{member['Entreprise']}</div>
                    <p className="text-sm text-gray-600 flex items-center mb-2">
                        <svg className="h-8 fill-current text-indigo-600 pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41zM17 14a1 1 0 0 1 2 0v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2h5a1 1 0 0 1 0 2H5v12h12v-5z"/></svg>
                        <a href={member['Site web'] }>{member['Site web'] }</a>
                    </p>

                    <p className="text-sm text-gray-600 flex items-center">
                        {member['Secteur'].map( (s, i) => <Tag key={i} texte={s}/> ) }
                    </p>

                    <p className="text-gray-700 text-base mt-2">{member['Description']} </p>

                </div>

                <div className="flex items-center">
                    <img className="w-20 h-20 rounded-full mr-4" src={member['Photo'][0].url} alt={member['Nom'] + " " + member['Prénom']  } />
                    <div className="text-sm">
                        <p className="text-gray-900 leading-none font-bold">{member['Nom'] + " " + member['Prénom']  }</p>
                        <p className="text-gray-600">{member['Email']}</p>
                        <p className="text-gray-600">{member['Téléphone']}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Member