declare var require:any;

const rxjs = require('rxjs');
const inquirer = require ('inquirer');
const fs = require('fs');





function eye_color() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                'people.json',
                'utf-8',
                (error, contenidoArchivo) => {
                    if (error) {
                        reject({mensaje: 'Error'});
                    } else {
                        const bdd = JSON.parse(contenidoArchivo);
                        const respuesta = bdd.persona
                            .map(
                                (people)=>{
                                    return  people.eye_color;
                                }
                            )
                        resolve(respuesta);
                    }
                });
        }
    );
}

eye_color()
    .then(
        (contenidoArchivo)=>{
            console.log('Eye',contenidoArchivo);
        }
    )
    .catch(
        (resultadoError)=>{
            console.log('Error',resultadoError);
        }
    )



function skin_color() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                'people.json',
                'utf-8',
                (error, contenidoArchivo) => {
                    if (error) {
                        reject({mensaje: 'Error'});
                    } else {
                        const bdd = JSON.parse(contenidoArchivo);
                        const respuesta = bdd.persona
                            .map(
                                (people)=>{
                                    return  people.skin_color;
                                }
                            )
                        resolve(respuesta);
                    }
                });
        }
    );
}

skin_color()
    .then(
        (contenidoArchivo)=>{
            console.log('skin_color',contenidoArchivo);
        }
    )
    .catch(
        (resultadoError)=>{
            console.log('Error',resultadoError);
        }
    )


function hair_color() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (error, contenidoArchivo) => {
                    if (error) {
                        reject({mensaje: 'Error'});
                    } else {
                        const bdd = JSON.parse(contenidoArchivo);
                        const respuesta = bdd.persona
                            .map(
                                (people)=>{
                                    return  people.hair_color;
                                }
                            )
                        resolve(respuesta);
                    }
                });
        }
    );
}

hair_color()
    .then(
        (contenidoArchivo)=>{
            console.log('hair_color',contenidoArchivo);
        }
    )
    .catch(
        (resultadoError)=>{
            console.log('Error',resultadoError);
        }
    )

function searchGender() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('people.json', 'utf-8',
                (error, contenidoArchivo) => {
                    if (error) {
                        reject({mensaje: 'Error'});
                    } else {
                        const bdd = JSON.parse(contenidoArchivo);
                        const respuesta= bdd.persona
                            .map(
                                (people)=>{
                                    return  people.gender;
                                }
                            )
                        resolve(respuesta);
                    }
                });
        }
    );
}

var Male= [];
var Female= [];

searchGender()
    .then(
        (contenidoArchivo)=>{
            console.log('Gender',contenidoArchivo);
            contenidoArchivo.map(
                (people)=> {
                    if (people=== 'male') {
                        Male.push(people);
                        console.log('MALE',Male)
                    }else{
                        if(people=== 'female'){
                            Female.push(people)
                            console.log('FEMALE',Female)
                        }
                    }
                }
            )
        }
    )
    .catch(
        (resultadoError)=>{
            console.log('Error',resultadoError);
        }
    )

function inicialiarBDD() {

    // @ts-ignore
    return new Promise(

        (resolve, reject) => {
            fs.readFile(
                'people.json',
                'utf-8',
                (error, contenidoArchivo) => { // CALLBACK
                    if (error) {

                    } else {
                        resolve({
                            mensaje: 'BDD leida',
                            bdd: JSON.parse(contenidoArchivo)
                        })
                    }
                }
            )
        }
    );

}

async function main() {

    // 1) Inicializar bdd -- DONE
    // 2) Preguntas Menu -- DONE
    // 3) Opciones de Respuesta --  DONE
    // 4) ACCCION!!!!  -- DONE
    // 5) Guardar BDD --


    // from(Promesas)
    console.log("goasd");
    const respuestaBDD$ = rxjs.from(inicialiarBDD());

}

interface BDD {
    presona: Persona[] | any;
}



interface Persona{
    name: string,
    height: number,
    mass: number,
    hair_color: string,
    skin_color: string,
    eye_color: string,
    birth_year: string,
    gender: string,
    homeworld: string,
    films: [string],
    species: [string],
    vehicles: [string],
    starships: [string],
    created: string,
    edited: string,
    url: string,
}