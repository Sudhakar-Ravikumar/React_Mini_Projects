
import './App.css'
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import QRCodeGenerator from "./components/qr-code-generator";
import LightDarkMode from "./components/light-dark-mode";
import ScrollIndicator from "./components/scroll-indicator";
import TabTest from "./components/custom-tabs/tab-test";
import ModalTest from "./components/custom-modal-popup/modal-test";
import GithubProfileFinder from "./components/github-profile-finder";
import SearchAutocomplete from "./components/search-autocomplete-with-api";
function App()
{
  return(
    <div className='App'>
    <Accordian />
    <div>Title : Random Color Generator</div> <br></br>
    <RandomColor />
    <br></br>
    <StarRating />
    <br></br>
    <ImageSlider url={"https://picsum.photos/v2/list"} limit={"4"} page={"1"}/>
    <br></br>
    <div >Title : Load More Product</div>
    <br></br>
    <LoadMoreData />
    <br></br>
    <div >Title : Tree View </div>
    <br></br>
    <TreeView menus={menus}/>
    <QRCodeGenerator/><br></br><br></br>
    <div >Title : Change theme</div><br></br>
    <LightDarkMode /><br></br>
    <ScrollIndicator />
    <TabTest />
    <p>Title : Modal Popup</p>
    <ModalTest/> 
    <p>Title : GitHub Identifier</p>
    <GithubProfileFinder/>
    <p>Title : Search Dropdown</p>
    <SearchAutocomplete/>
    </div>
  )
}
export default App ;
