import Subdivisao from "./Subdivisao";
import styles from '../styles/subDivisao.module.css'

export default function Linha2(props){
    return(
        <div className={styles.linha}>
        <Subdivisao preta/>
        <Subdivisao/>
        <Subdivisao preta/>
        <Subdivisao/>
        <Subdivisao preta/>
        <Subdivisao/>
        <Subdivisao preta/>
        <Subdivisao/>

        </div>
    )
}