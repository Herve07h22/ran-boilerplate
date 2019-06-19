import React, {useState, useEffect } from 'react';
import axios from 'axios';

import Member from './Member'
import {url} from '../api/api'

const GridMember = () => {
    // const [ filter, setFilter ] = useState('')
    const [ cards, setcards ]   = useState([])

    useEffect( () => {
        const fetchData = async () => {
            const result = await axios(url('cards'))
            console.log("result :", result.data.data) 
            setcards(result.data.data)
          }
      
        fetchData()
        }, [])
    
        return (
            <div className="flex flex-wrap">
                {cards.map( card => <Member key={card['Email']} member={card} /> )}
            </div>
        )

}

export default GridMember

