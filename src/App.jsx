
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
import TicTacToe from "./components/tic-tact-toe";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";
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
  
    <TicTacToe/> 
    <p>Title : Fetch Hook</p>
    <UseFetchHookTest/><hr></hr>
    <p>Title : useRef  Hook</p>
    <UseOnclickOutsideTest/><hr></hr>
    <p>Title : useResponsive Custom  Hook</p>
    <UseWindowResizeTest/><hr></hr>
    <ScrollToTopAndBottom/><hr></hr>
   
    <ScrollToSection/>
    </div>
  )
}
export default App ;
