//estos nutrientes son por cada 100 gramos

const ingredients1 = {
    tomates: {
        equivalentInGrams: {
            taza: 210,
            cucharada: 13,
            gramos: 1
        },
        calorias:
        {
            quantity: 0.2200,
            unit: "cals"
        },
        grasa:{
            quantity: 0.0025,
            unit: "gramos"
        },
        carbohidratos: {
            quantity: 0.0482,
            unit: "gramos"
        },
        proteinas: {
            quantity: 0.0108,
            unit: "gramos"

        }
    },
    cebollas: {
        equivalentInGrams: {
            taza: 55,
            cucharada: 3.3, 
            gramos: 1
        },

        calorias: {
            quantity: 0.4200,
            unit: "cals"
        },
        grasa: {
            quantity: 0.0008,
            unit: "gramos"
        },
        carbohidratos: {
            quantity: 0.1011,
            unit: "gramos"
        },
        proteinas: {
            quantity: 0.0092,
            unit: "gramos"}

    },
    zanahoria: {
        equivalentInGrams: {
            taza: 140,
            cucharada: 8.1,
            gramos: 1 
        },
        calorias: {
            quantity: 0.5200,
            unit: "cals"
        },
        grasa: {
            quantity: 0.0031,
            unit: "gramos",
        },
        carbohidratos: {
            quantity: 0.1226,
            unit: "gramos"
        },
        proteinas: {
            quantity: 0.119,
            unit: "gramos"
        }

    }
};

const ingredients2 = {
    tomates: {
        equivalentInGrams: {
            taza: 210,
            cucharada: 13,
        },
        calorias:
        {
            quantity: 0.2200,
            unit: "cals"
        },
        grasa:{
            quantity: 0.0025,
            unit: "gramos"
        },
        carbohidratos: {
            quantity: 0.0482,
            unit: "gramos"
        },
        proteinas: {
            quantity: 0.0108,
            unit: "gramos"
        }
    },
    cebollas: {
        equivalentInGrams: {
            taza: 55,
            cucharada: 3.3, 
        },

        calorias: {
            quantity: 0.4200,
            unit: "cals"
        },
        grasa: {
            quantity: 0.0008,
            unit: "gramos"
        },
        carbohidratos: {
            quantity: 0.1011,
            unit: "gramos"
        },
        proteinas: {
            quantity: 0.0092,
            unit: "gramos"}
    },
    zanahoria: {
        equivalentInGrams: {
            taza: 140,
            cucharada: 8.1, 
        },
        calorias: {
            quantity: 0.5200,
            unit: "cals"
        },
        grasa: {
            quantity: 0.0031,
            unit: "gramos",
        },
        carbohidratos: {
            quantity: 0.1226,
            unit: "gramos"
        },
        proteinas: {
            quantity: 0.119,
            unit: "gramos"
        }
    }
};


// const deployIngredients = (ingredientsObj) => {
//     Object.entries(ingredientsObj).map((item, index) => {
//         window.prompt(`(${index}) ${item}`)});
// };
// deployIngredients(ingredients1)


const ingredientsArray = ["tomates", "cebollas", "zanahoria"];
const nutrients = ["calorias", "grasa", "carbohidratos", "proteinas"];


const getNutritionFacts = (obj, ingredient, ingredientQuantity, unitMeasurement) => {
    const infoPerIngredient = {};
    //ingredientQuantity: cantidad a convertir ingresada por el usario (number)
    let quantityToConvert = ingredientQuantity;

    //equivalencia en gramos del recipiente o pieza (ej: 1 taza de tomates es igual a 210 gramos.)
    let inGrams = obj[ingredient].equivalentInGrams[unitMeasurement];

    // console.log(inGrams)
    //equivalencia en gramos del total de recipientes o piezas (ej: 2 tazas de tomates son igual a 240 gramos de tomate)
    let portionIngredientInGrams = quantityToConvert*inGrams;

    if(ingredientsArray.includes(ingredient)){
        nutrients.forEach((item) => {
            let nutrientPerGrams = obj[ingredient][item].quantity;
            let nutrientUnit = obj[ingredient][item].unit
            let nutrientQuantity = parseFloat(portionIngredientInGrams*nutrientPerGrams).toFixed(2);
            infoPerIngredient[item] = {quantity:  Number(nutrientQuantity), unit: nutrientUnit};
        });        
    };    
    console.log(ingredientQuantity, unitMeasurement, 'de' , ingredient, `(${(portionIngredientInGrams)} gramos)`, 'contiene :', infoPerIngredient);
};
//ejecutar la función cambiando los parámetros del 2 al 4:
getNutritionFacts(ingredients1, "zanahoria", 5, "cucharada");
