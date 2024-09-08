import React from "react";
import {useParams} from "react-router-dom"



export default function VanDetail(){

    const param = useParams()

    return (`${param.id} Details `)
}