import { Luz_techo1 } from "../../components/postes_luces/luz_techo1";
import { Luz_techo2 } from "../../components/postes_luces/luz_techo2";
import { Luz_techo3 } from "../../components/postes_luces/luz_techo3";
import { Luz_techo4 } from "../../components/postes_luces/luz_techo4";
import { Luz_techo5 } from "../../components/postes_luces/luz_techo5";
import { Luz_techo6 } from "../../components/postes_luces/luz_techo6";
import { MinifaroManager } from "../../components/postes_luces/MinifaroManager";

const Luces = () => {

    return (
        <>
            <MinifaroManager />
            <Luz_techo1 />
            <Luz_techo2 />
            <Luz_techo3 />
            <Luz_techo4 />
            <Luz_techo5 />
            <Luz_techo6 />
        </>
    );
};

export default Luces;
