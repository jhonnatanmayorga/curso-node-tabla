const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5 ,listar = true, hasta = 10) => {

    try {
        let salida = '';
        let consola = '';
        
        for (let i = 0; i <= hasta; i++){
            salida += `${base} x ${i} = ${base * i}\n`;
            consola += `${base} ${'x '.red}${i} ${'='.green} ${base * i}\n`;
        }
        
        if(listar == true){
            console.log(`===============`);
            console.log(colors.green(` Tabla del : ${ base }`));
            console.log(`===============`);
            console.log(consola)

        }
        fs.writeFileSync(`./salida/tabla-${ base }.txt`, salida);
        if (listar == true){
            console.log(`tabla-${ base }.txt creado`);

        }
    
        return `tabla-${ base }.txt creado`;
        
    } catch (error) {
        throw error
    }
    
}

module.exports = {
    crearArchivo
}