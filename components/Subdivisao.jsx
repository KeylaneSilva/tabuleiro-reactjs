import styles from "../styles/subDivisao.module.css"

export default function Subdivisao(props){
    return(
        <div style={{
            backgroundColor: props.preta ? 'black' : 'white',
        }}
        className={styles.subdivisao}></div>
    )
}