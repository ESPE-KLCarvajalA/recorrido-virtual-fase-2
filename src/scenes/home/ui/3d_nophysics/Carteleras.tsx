import { CarteleraAgro } from "../../components/carteleras/carteleraAgro";
import { CarteleraBIO } from "../../components/carteleras/carteleraBio";
import { CarteleraITIN } from "../../components/carteleras/carteleraITIN";


const Carteleras = () => {

    return (
        <>
        <CarteleraBIO />
        <CarteleraAgro />
        <CarteleraITIN />
        </>
    );
};

export default Carteleras;
