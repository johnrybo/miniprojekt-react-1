import React from 'react';
import '../App.css';

interface Props {
    text: string;
}

export default function Sky(props: Props) {
    return (
        <div>{props.text}</div>
    )
}

// Hämtar typ av väder / himmel och gör om till text
export function getSky(wsymb2: number) {
    if (wsymb2 === 1) {
      return "Klar himmel";
    } else if (wsymb2 === 2) {
      return "Nästan klar himmel";
    } else if (wsymb2 === 3) {
      return "Varierande molnighet";
    } else if (wsymb2 === 4) {
      return "Halvklar himmel";
    } else if (wsymb2 === 5) {
      return "Molnig himmel";
    } else if (wsymb2 === 6) {
      return "Mulet";
    } else if (wsymb2 === 7) {
      return "Dimma";
    } else if (wsymb2 === 8) {
      return "Lätta regnskurar";
    } else if (wsymb2 === 9) {
      return "Måttliga regnskurar";
    } else if (wsymb2 === 10) {
      return "Kraftiga regnskurar";
    } else if (wsymb2 === 11) {
      return "Åskväder";
    } else if (wsymb2 === 12) {
      return "Lätta skurar av snöblandat regn";
    } else if (wsymb2 === 13) {
      return "Måttligt skurar av snöblandat regn";
    } else if (wsymb2 === 14) {
      return "Kraftiga skurar av snöblandat regn";
    } else if (wsymb2 === 15) {
      return "Lätta snöbyar";
    } else if (wsymb2 === 16) {
      return "Måttliga snöbyar";
    } else if (wsymb2 === 17) {
      return "Kraftiga snöbyar";
    } else if (wsymb2 === 18) {
      return "Duggregn";
    } else if (wsymb2 === 19) {
      return "Måttligt regn";
    } else if (wsymb2 === 20) {
      return "Kraftigt regn";
    } else if (wsymb2 === 21) {
      return "Åska";
    } else if (wsymb2 === 22) {
      return "Lätt snöblandat regn";
    } else if (wsymb2 === 23) {
      return "Måttligt snöblandat regn";
    } else if (wsymb2 === 24) {
      return "Kraftigt snöblandat regn";
    } else if (wsymb2 === 25) {
      return "Lätt snöfall";
    } else if (wsymb2 === 26) {
      return "Måttligt snöfall";
    } else if (wsymb2 === 27) {
      return "Kraftigt snöfall";
    }
  }