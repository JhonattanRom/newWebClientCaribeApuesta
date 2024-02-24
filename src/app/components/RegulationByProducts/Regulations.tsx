import styles from "./styles.module.css";

export default function Regulations({ option }: any) {
    return(
        <div className={styles.RegulationsOptionContainer}>
            {option === 1 && <Option1 />}
            {option === 2 && <Option2 />}
            {option === 3 && <Option3 />}
            {option === 4 && <Option4 />}

        </div>
    )
}

const Option1 = () => {
    return (<>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae incidunt minima voluptatum iste officia
            repellat corrupti, exercitationem libero cupiditate modi, totam nemo illo quia earum magnam sequi esse porro nesciunt
            eligendi illum vel necessitatibus ex et? Repellat, maxime ducimus exercitationem et beatae eius neque blanditiis cupiditate
            voluptate. At, temporibus?</p>

    </>)
}
const Option2 = () => {
    return (<>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae incidunt minima voluptatum iste officia
            repellat corrupti, exercitationem libero cupiditate modi, totam nemo illo quia earum magnam sequi esse porro nesciunt
            eligendi illum vel necessitatibus ex et? Repellat, maxime ducimus exercitationem et beatae eius neque blanditiis cupiditate
            voluptate. At, temporibus?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae incidunt minima voluptatum iste officia
            repellat corrupti, exercitationem libero cupiditate modi, totam nemo illo quia earum magnam sequi esse porro nesciunt
            eligendi illum vel necessitatibus ex et? Repellat, maxime ducimus exercitationem et beatae eius neque blanditiis cupiditate
            voluptate. At, temporibus?</p>
    </>)
}
const Option3 = () => {
    return (<>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae incidunt minima voluptatum iste officia
            repellat corrupti, exercitationem libero cupiditate modi, totam nemo illo quia earum magnam sequi esse porro nesciunt
            eligendi illum vel necessitatibus ex et? Repellat, maxime ducimus exercitationem et beatae eius neque blanditiis cupiditate
            voluptate. At, temporibus?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae incidunt minima voluptatum iste officia
            repellat corrupti, exercitationem libero cupiditate modi, totam nemo illo quia earum magnam sequi esse porro nesciunt
            eligendi illum vel necessitatibus ex et? Repellat, maxime ducimus exercitationem et beatae eius neque blanditiis cupiditate
            voluptate. At, temporibus?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae incidunt minima voluptatum iste officia
            repellat corrupti, exercitationem libero cupiditate modi, totam nemo illo quia earum magnam sequi esse porro nesciunt
            eligendi illum vel necessitatibus ex et? Repellat, maxime ducimus exercitationem et beatae eius neque blanditiis cupiditate
            voluptate. At, temporibus?</p>
    </>)
}
const Option4 = () => {
    return (<>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae incidunt minima voluptatum iste officia
            repellat corrupti, exercitationem libero cupiditate modi, totam nemo illo quia earum magnam sequi esse porro nesciunt
            eligendi illum vel necessitatibus ex et? Repellat, maxime ducimus exercitationem et beatae eius neque blanditiis cupiditate
            voluptate. At, temporibus?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae incidunt minima voluptatum iste officia
            repellat corrupti, exercitationem libero cupiditate modi, totam nemo illo quia earum magnam sequi esse porro nesciunt
            eligendi illum vel necessitatibus ex et? Repellat, maxime ducimus exercitationem et beatae eius neque blanditiis cupiditate
            voluptate. At, temporibus?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae incidunt minima voluptatum iste officia
            repellat corrupti, exercitationem libero cupiditate modi, totam nemo illo quia earum magnam sequi esse porro nesciunt
            eligendi illum vel necessitatibus ex et? Repellat, maxime ducimus exercitationem et beatae eius neque blanditiis cupiditate
            voluptate. At, temporibus?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores vitae incidunt minima voluptatum iste officia
            repellat corrupti, exercitationem libero cupiditate modi, totam nemo illo quia earum magnam sequi esse porro nesciunt
            eligendi illum vel necessitatibus ex et? Repellat, maxime ducimus exercitationem et beatae eius neque blanditiis cupiditate
            voluptate. At, temporibus?</p>
    </>)
}