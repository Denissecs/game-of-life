const matriz = [[0, 0, 0, 0, 0],
[0, 1, 1, 1, 0],
[0, 1, 0, 1, 0],
[0, 1, 1, 1, 0],
[0, 0, 0, 0, 0]];

const vecinos = (m) => {
    const fila = m.length;//largo de la fila
    const columna = m[0].length;//largo de la columna    
    const contarvecinos = (r, c) => {
        let contar = 0;
        for (let x = -1; x <= 1; x++) {
            for (let y = -1; y <= 1; y++) {
                const ni = r + x;
                const nj = c + y;
                if (ni >= 0 && ni < fila && nj >= 0 && nj < columna && !(r === 0 && c === 0)) {
                    contar += m[ni][nj];
                }
            }
        }
        return contar;
    };
    console.log(m)
    for (let i = 1; i < fila; i++) {
        for (let j = 1; j < columna; j++) {
            const cell = m[i][j];
            const nv = contarvecinos(i, j);

            if (cell === 0 && nv === 3) {
                m[i][j] = 1;
                console.log(m)
            } else if (cell === 1 && (nv < 2 || nv > 3)) {
                m[i][j] = 0;
                console.log(m)
            }
        }
    }
};
vecinos(matriz);



var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

const mat = [1, 0, 1, 0, 0];

const drawMatrix = (m) => {
    
    for (let i = 0; i < m.length; i++) {
        const y = i * 15;

        ctx.rect( y, 15, 15, 15) ;
    
        if (m[i] === 0) {
            ctx.Style = "rgb(0,0,0)";
           
        } else {
            ctx.Style = "rgb(255,255,255)";
            
        };

        ctx.fill();

        
    }
}
drawMatrix(mat);
