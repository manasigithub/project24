function twoDimensionalArray(n1,n2){
    let array = [];

    for(let i=0;i<n1;i++)
    {
        for(let j=0;j<n2;j++)
        {
            array[i]= []; 
        }
    }

    for(let i=0;i<n1;i++)
    {
        for(let j=0;j<n2;j++)
        {
            array[i][j]= j; 
        }
    }

    return array;

}

const result = twoDimensionalArray(2,3);
document.write(result);