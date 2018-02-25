import axios from "axios";
import { BASE, MOVIES_URL, MOVIES_DETAILS_URL } from "../constants/routes";

const Index = props => (
    <div>
        Movies: {props.data.map(a => a.title)}
        <br />
        Id: {props.details.id}
    </div>
);

Index.getInitialProps = async function() {
    const res = await axios.get(MOVIES_URL);
    const details = await axios.get(MOVIES_DETAILS_URL(123));

    return {
        data: res.data,
        details: details.data
    };
};

export default Index;
