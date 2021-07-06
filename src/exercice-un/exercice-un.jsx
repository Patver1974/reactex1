import PropTypes from 'prop-types';

const ExerciceUn = function(props) {
const {nomfamille,age} = props;

    return(
<h1>Je m'appelle {nomfamille} et j'ai {age} ans</h1>

);
}
ExerciceUn.defaultProps = {
nb1: "Jordy",
nb2: 5
};
ExerciceUn.propTypes = {
nb1:PropTypes.string,
nb2:PropTypes.number
}

export default ExerciceUn