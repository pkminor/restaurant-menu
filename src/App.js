import React from 'react';
import './App.css';

class Menu extends React.Component {

  constructor(){
    super()

    this.state={
      salad:false,

         santaFe:false,
         greek:false,
         asian:false,

        dressing:false,
         italian:false,
         blueCheese:false,
         ranch:false,

        bread:false,
         italian:false,
         flat:false,
         sourdough:false,

      entree:false,
       steak:false,
       salmon:false,
       rice:false,

      soup:false,
        minstrone:false,
        hotsour:false,
        miso:false,

        sbread:false,
        breadSticks:false
    }


  }

  updateMenu(menu, event){

    switch (menu) {
      case 'salad': this.setState({salad:!this.state.salad}); break;

       case 'santaFe': this.setState({santaFe:!this.state.santaFe}); break;
       case 'greek': this.setState({greek:!this.state.greek}); break;
       case 'asian': this.setState({asian:!this.state.asian}); break;

       case 'dressing': this.setState({dressing:!this.state.dressing}); break;
           case 'italian': this.setState({italian:!this.state.italian}); break;
           case 'blueCheese': this.setState({blueCheese:!this.state.blueCheese}); break;
           case 'ranch': this.setState({ranch:!this.state.ranch}); break;

       case 'bread': this.setState({bread:!this.state.bread}); break;
          case 'italian': this.setState({italian:!this.state.italian}); break;
          case 'flat': this.setState({blueCheese:!this.state.flat}); break;
          case 'sourdough': this.setState({ranch:!this.state.sourdough}); break;


      case 'entree': this.setState({entree:!this.state.entree}); break;
        case 'steak': this.setState({steak:!this.state.steak}); break;
        case 'salmon': this.setState({salmon:!this.state.salmon}); break;
        case 'rice': this.setState({rice:!this.state.rice}); break;

      case 'soup': this.setState({soup:!this.state.soup}); break;
       case 'minstrone': this.setState({minstrone:!this.state.minstrone}); break;
       case 'hotsour': this.setState({hotsour:!this.state.hotsour}); break;
       case 'miso': this.setState({miso:!this.state.miso}); break;

         case 'sbread': this.setState({sbread:!this.state.sbread}); break;
          case 'breadSticks': this.setState({breadSticks:!this.state.breadSticks}); break;

      default: break;


    }

    if(!this.state.salad){
      this.setState(
        { santaFe:false,greek:false, asian:false, dressing:false, bread:false, italian:false, blueCheese:false, ranch:false})
    }

    if(!this.state.soup){
      this.setState(
        { minstrone:false,hotsour:false, miso:false, sbread:false, breadSticks:false})
    }
  }
  

  render(){
    let dressingChoices =(
      <div>
      <input type="checkbox"  name="dressing-italian" onClick={this.updateMenu.bind(this, "italian")} /> Italian <br />
      <input type="checkbox"  name="dressing-blueCheese" onClick={this.updateMenu.bind(this, "blueCheese")} /> Blue Cheese <br />
      <input type="checkbox"  name="dressing-ranch" onClick={this.updateMenu.bind(this, "ranch")} /> Ranch <br />
      </div>
    );
    let showDressingChoices=false
    if(!this.state.dressing){dressingChoices=''}

    let breadChoices =(
      <div>
      <input type="checkbox"  name="bread-italian" onClick={this.updateMenu.bind(this, "italian")} /> Italian <br />
      <input type="checkbox"  name="bread-flat" onClick={this.updateMenu.bind(this, "flat")} /> Flat <br />
      <input type="checkbox"  name="bread-sourdough" onClick={this.updateMenu.bind(this, "Sourdough")} /> Sourdough <br />
      </div>
    );

    let showBreadChoices=false
    if(!this.state.bread){breadChoices=''}

    let saladChoices = (
      <div>
      <input type="checkbox"  name="salad-Santa Fe" onClick={this.updateMenu.bind(this, "santaFe")} /> Santa Fe <br />
      <input type="checkbox"  name="salad-Greek" onClick={this.updateMenu.bind(this, "greek")} /> Greek <br />
      <input type="checkbox"  name="salad-Asian" onClick={this.updateMenu.bind(this, "asian")} /> Asian <br />
      </div>
    );

    let saladRelated =(
     <div>
     <p>You might also want: </p>
     <input type="checkbox"  name="salad-Dressing" onClick={this.updateMenu.bind(this, "dressing")} /> Dressing <br />
     <ul>
     {dressingChoices}
     </ul>
     <input type="checkbox"  name="salad-Bread" onClick={this.updateMenu.bind(this, "bread")} /> Bread <br />
     <ul>
     {breadChoices}
     </ul>
     </div>
   );

    let showSaladRelated=false
    if(this.state.santaFe){showSaladRelated=true}
    if(this.state.greek){  showSaladRelated=true}
    if(this.state.asian ){ showSaladRelated=true}
    if(!showSaladRelated){saladRelated=''}
    if(!this.state.salad){saladChoices=''; saladRelated=''}


    let entreeChoices=(
      <div>
      <input type="checkbox"  name="entree-Steak" onClick={this.updateMenu.bind(this, "steak")} /> Steak <br />
      <input type="checkbox"  name="entree-Salmon" onClick={this.updateMenu.bind(this, "salmon")} /> Salmon <br />
      <input type="checkbox"  name="entree-Rice" onClick={this.updateMenu.bind(this, "rice")} /> Rice <br />
      </div>
    );
    let entreeRelated=''

    let showEntreeChoices=false
    if(!this.state.entree){entreeChoices=''}

    let sbreadChoices =(
      <div>
      <input type="checkbox"  name="sbread-Bread Sticks" onClick={this.updateMenu.bind(this, "breadSticks")} /> Breadsticks <br />
      </div>
    );

    let showSBreadChoices=false
    if(!this.state.sbread){sbreadChoices=''}

    let soupChoices = (
      <div>
      <input type="checkbox"  name="soup-Minstrone" onClick={this.updateMenu.bind(this, "minstrone")} /> Minstrone <br />
      <input type="checkbox"  name="soup-Hot and sour" onClick={this.updateMenu.bind(this, "hotsour")} /> Hot and sour <br />
      <input type="checkbox"  name="soup-Miso" onClick={this.updateMenu.bind(this, "miso")} /> Miso <br />
      </div>
    );

    let soupRelated =(
     <div>
     <p>You might also want: </p>
     <input type="checkbox"  name="soup-Bread" onClick={this.updateMenu.bind(this, "sbread")} /> Bread <br />
     <ul>
     {sbreadChoices}
     </ul>
     </div>
   );

    let showSoupRelated=false
    if(this.state.minstrone){showSoupRelated=true}
    if(this.state.hotsour){  showSoupRelated=true}
    if(this.state.miso ){ showSoupRelated=true}
    if(!showSoupRelated){soupRelated=''}
    if(!this.state.soup){soupChoices=''; soupRelated=''}


  return (
    <ul className="App">
      <input type="checkbox"  name="salad" onClick={this.updateMenu.bind(this, "salad")} /> Salad <br />
      <ul>
      {saladChoices}
      {saladRelated}
      </ul>

      <input type="checkbox" name="entree" onClick={this.updateMenu.bind(this, "entree")} /> Entree <br />
      <ul>
      {entreeChoices}
      {entreeRelated}
      </ul>

      <input type="checkbox" name="soup" onClick={this.updateMenu.bind(this, "soup")} /> Soup <br />
      <ul>
      {soupChoices}
      {soupRelated}
      </ul>

    </ul>
  );}
}



export default Menu;
