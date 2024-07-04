import { add } from "./a";
import { multiply } from "./b";

const sum =add(5,3);
const product =multiply(5,3);

document.body.innerHTML=`
    <div>
        <p>Sum:${sum}</p>
        <p>Product:${product}</p>
    </div>
`;

console.log(`Sum:${sum}`);
console.log(`Product:${product}`);