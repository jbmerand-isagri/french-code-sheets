/******************************************************************************/
/************** DEFINITIONS, CARACTERISTIQUES *********************************/
/******************************************************************************/

/*
- langage à balises, sensible à casse, exigence fermeture éléments (/>)
- PROPS : les attributs
  -- forcément littéral String entre "" ou expression JSX entre {}
  -- mais type réel expression JSX conservée (booléen...)
  -- props booléennes dont valeur est true : juste nom prop suffit
  -- pas possible utiliser mots-clés JS comme noms de props
    -- className (pour class), htmlFor (pour for)
- pas de syntaxe dédiée pour commentaires, mettre dans expression {}
- noms des éléments : si démarre pas majuscule, pour moteur = élément natif
fourni par la plateforme (navigateur), si par majuscule = composant React
- ignore valeurs comme noeuds (éléments) JSX : true,false,null,undefined

Découper son JSX si :
- répétition de code au sein du render -> créer une const avec contenu
- grappe à l'intérieur d'une prop -> peu lisible, définir grappe prop avant
- JSX trop massif -> indice composant devrait être découpé en sous-composants


*/

/******************************************************************************/
/************** LES PROPS *****************************************************/
/******************************************************************************/

// attributs des composants
// définis par ensemble de clés/valeurs, définies dans un objet, qui est passé 
// en argument à la fonction du composant. 

// trois formes syntaxiques possibles :
nom = "string"
nom = { expressionJSX }
nom // pour une prop booléenne, équivaut à : nom={true}

/******************************************************************************/
/************** CONDITIONS ****************************************************/
/******************************************************************************/

/* JSX produit une expression JS et non une instruction => pas possible utiliser
 instructions comme if, for...
Se base sur des expressions utilisant opérateurs logiques binaires (&&, ||) et
 sur l'opérateur ternaire (? :). */

/************** SI...ALORS... *************************************************/

<p>{42 > 43 && document.nonExistingMethod()}</p>
// retranscrit contenu conditionnel simple
// si condition échoue, opérande de droite pas évaluée et vaudra false au global
// JSX ignore le false et rien n'apparait dans DOM navigateur

<p>{user.admin && ( // meilleure façon d'enrober et d'indenter
  <a href="/admin">Faire des trucs de VIP</a>
)}</p>
// si condition remplie : expression évalue opérande de droite qui constitue 
// valeur finale. Lien apparait.

/************** SI...ALORS...SINON... *****************************************/

<p>{user.loggedIn ? <WelcomeLabel /> : <LoginLink />}</p>

<p>{user.admin ? (
  <a href="/admin">Faire des trucs de VIP</a>
) : (
  <a href="/request-admin">Demander à devenir VIP</a>
)}</p>

/******************************************************************************/
/************** BOUCLES *******************************************************/
/******************************************************************************/

/* Utilise mapers. Ex: array.map(fonction) */
render () {
  return (
    <div className="userList">
      {this.props.users.map((user) => (
        <a href={`/users/${user.id}`}>{user.name}</a>
      ))}
    </div>
  )
}
// en destructurant et en ajoutant la key
render () {
  return (
    <div className="userList">
      {this.props.users.map(({ id, name }) => (
        <a href={`/users/${id}`} key={id}>{name}</a>
      ))}
    </div>
  )
}

/******************************************************************************/
/************** EVENEMENTS ****************************************************/
/******************************************************************************/

onChange

<button onClick={activateLasers}>
  Activate Lasers
</button>

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);

class App extends Component {
  constructor() { // pour définir un état
    super(); // pour être capable de l'utiliser
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => { // à chaque fois voit un event sur la page, propriété de App, nécessite trigger (déclencheur)
    console.log(event.target.value);
  }

// dans le render()
<ImageLinkForm onInputChange={this.onInputChange} /> {/* passe le prop onInputChange */}

// dans fonction pure ImageLinkForm.js
<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange} />

/******************************************************************************/
/************** TABLEAUX ******************************************************/
/******************************************************************************/

// pour conserver association correcte entre données d'origine et DOM virtuel,
// et optimiser la retranscription des changements, React exige tout élément 
// d'un tableau dans une grappe JSX soit doté d'une propre technique : key
// KEY doit être unique au sein du tableau, stable dans le temps

// filtrage automatique des tableaux
// ignore valeurs comme noeuds (éléments) JSX : true,false,null,undefined

/******************************************************************************/
/************** FONCTIONS *****************************************************/
/******************************************************************************/

function Demo({ cssClass, title }) {
  return <h1 className={cssClass}>{title}</h1>
}

ReactDOM.render(
  <Demo cssClass="brittle" title="Not so good" />,
  document.getElementById('root')
)

/******************************************************************************/
/************** Style Inline **************************************************/
/******************************************************************************/

// sont spécifiés avec un objet dont la clé est la version camelcase du nom
// du style et dont la valeur est la valeur du style

var divStyle = {
  color: 'white',
  backgroundImage: 'url(' + imgUrl + ')',
  WebkitTransition: 'all', // note the capital 'W' here
  msTransition: 'all' // 'ms' is the only lowercase vendor prefix
};

ReactDOM.render(<div style = {divStyle}> Hello World! </div>, mountNode);

ReactDOM.render(<nav style={{display: 'flex', justifyContent: 'flex-end'}}></nav>);


/******************************************************************************/
/************** Initialiseur de champ pour garantir le this *******************/
/******************************************************************************/

// utilise fait que fonctions fléchées n'ont pas de contexte d'invocation et pas
// leur propre this, mais celui le plus proche dans les portées englobantes

class LoginScreen extends Component {
  logIn = (event) => {
    // …
  }

  // …
}

// correspond à :

class LoginScreen extends Component {
  constructor(props) {
    super(props)
    this.logIn = (event) => {
      // …
    }
  }

  // …
}



A VOIR

this.setState({imageUrl: this.state.input})

setState(updater, callback) // pour être sûr que React a fini de mettre à jour les changements d'état avant de lancer une fonction
// setState() est un appel asynchrone. React rassemble plusieurs appels vers setState en un seul appel, puis re-render le composant une seule fois, plutôt que de re-render pour chaque changement d'état.
