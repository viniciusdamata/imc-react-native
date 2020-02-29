//imc           |Classificação | cor
//<18,5         |Magreza       | #8edcec
//>=18,5  <24,9 |Saudável      | #00e284
// >=25 <29,9   |Sobrepeso     | #fbe08a
//>=30,0 <34,9  | Obesidade 1  | #f6aa34
//>=35,0 <39,9  | Obesidade 2  | #ff405f
//>40           | Obesidade 3  | #f100f8

export default function resultAndColor(imc) {
  let result = {
    backgroundColor: "",
    classificacao: "",
  };
  if (imc < 18.5) {
    result["backgroundColor"] = "#8edcec";
    result["classificacao"] = "Magreza";
  } else if (imc < 24.9) {
    result["backgroundColor"] = "#00e284";
    result["classificacao"] = "Saudável";
  } else if (imc < 29.9) {
    result["backgroundColor"] = "#fbe08a";
    result["classificacao"] = "Sobrepeso";
  } else if (imc < 34.9) {
    result["backgroundColor"] = "#f6aa34";
    result["classificacao"] = "Obesidade 1";
  } else if (imc < 39.9) {
    result["backgroundColor"] = "#ff405f";
    result["classificacao"] = "Obesidade 2";
  } else if (imc > 40) {
    result["backgroundColor"] = "#f100f8";
    result["classificacao"] = "Obesidade 3";
  }
  return result;
}

resultAndColor(21.2)