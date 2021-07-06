import PropTypes from 'prop-types';
import style from './element-style.module.css';
const ElementStyle = function(props) {
const {nb1,nb2} = props;
const result = nb1 + nb2;
    return(

<p>La somme de <span className={style.nb1}>{nb1}</span> et <span className={style.nb}>{nb2}</span> donne <span className={style.result}>{result}</span> </p>  


);
}
ElementStyle.defaultProps = {
nb1: 42,
nb2: 5
};
ElementStyle.propTypes = {
nb1:PropTypes.number,
nb2:PropTypes.number
}

export default ElementStyle