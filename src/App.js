import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faChessKing, 
  faChessQueen, 
  faChessRook, 
  faChessBishop, 
  faChessKnight, 
  faChessPawn 
} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <td className='g'><FontAwesomeIcon style={{ color: 'white' }} icon={faChessRook} fontSize="60px"/></td>
          <td className='w'><FontAwesomeIcon style={{ color: 'white' }} icon={faChessKnight} fontSize="60px"/></td>
          <td className='g'><FontAwesomeIcon style={{ color: 'white' }} icon={faChessBishop} fontSize="60px"/></td>
          <td className='w'><FontAwesomeIcon style={{ color: 'white' }} icon={faChessKing} fontSize="60px"/></td>
          <td className='g'><FontAwesomeIcon style={{ color: 'white' }} icon={faChessQueen} fontSize="60px"/></td>
          <td className='w'><FontAwesomeIcon style={{ color: 'white' }} icon={faChessBishop} fontSize="60px"/></td>
          <td className='g'></td>
          <td className='w'><FontAwesomeIcon style={{ color: 'white' }} icon={faChessRook} style={{ color: 'white' }} fontSize="60px"/></td>
        </tr>
        <tr>
          <td className='w'><FontAwesomeIcon icon={faChessPawn} style={{ color: 'white' }} fontSize="60px"/></td>
          <td className='g'><FontAwesomeIcon icon={faChessPawn} style={{ color: 'white' }} fontSize="60px"/></td>
          <td className='w'><FontAwesomeIcon icon={faChessPawn} style={{ color: 'white' }} fontSize="60px"/></td>
          <td className='g'><FontAwesomeIcon icon={faChessPawn} style={{ color: 'white' }} fontSize="60px"/></td>
          <td className='w'><FontAwesomeIcon icon={faChessPawn} style={{ color: 'white' }} fontSize="60px"/></td>
          <td className='g'><FontAwesomeIcon icon={faChessPawn} style={{ color: 'white' }} fontSize="60px"/></td>
          <td className='w'><FontAwesomeIcon icon={faChessPawn} style={{ color: 'white' }} fontSize="60px"/></td>
          <td className='g'><FontAwesomeIcon icon={faChessPawn} style={{ color: 'white' }} fontSize="60px"/></td>
        </tr>
        <tr>
          <td className='g'></td>
          <td className='w'></td>
          <td className='g'></td>
          <td className='w'></td>
          <td className='g'></td>
          <td className='w'></td>
          <td className='g'></td>
          <td className='w'><FontAwesomeIcon icon={faChessKnight} style={{ color: 'white' }} fontSize="60px"/></td>
        </tr>
        <tr>
          <td className='w'></td>
          <td className='g'></td>
          <td className='w'></td>
          <td className='g'></td>
          <td className='w'><FontAwesomeIcon icon={faChessPawn} fontSize="60px"/></td>
          <td className='g'></td>
          <td className='w'></td>
          <td className='g'></td>
        </tr>
        <tr>
          <td className='g'></td>
          <td className='w'></td>
          <td className='g'></td>
          <td className='w'></td>
          <td className='g'></td>
          <td className='w'></td>
          <td className='g'></td>
          <td className='w'></td>
        </tr>
        <tr>
          <td className='w'><FontAwesomeIcon icon={faChessPawn} fontSize="60px"/></td>
          <td className='g'><FontAwesomeIcon icon={faChessPawn} fontSize="60px"/></td>
          <td className='w'><FontAwesomeIcon icon={faChessPawn} fontSize="60px"/></td>
          <td className='g'><FontAwesomeIcon icon={faChessPawn} fontSize="60px"/></td>
          <td className='w'></td>
          <td className='g'><FontAwesomeIcon icon={faChessPawn} fontSize="60px"/></td>
          <td className='w'><FontAwesomeIcon icon={faChessPawn} fontSize="60px"/></td>
          <td className='g'><FontAwesomeIcon icon={faChessPawn} fontSize="60px"/></td>
        </tr>
        <tr>
          <td className='g'><FontAwesomeIcon icon={faChessRook} fontSize="60px"/></td>
          <td className='w'><FontAwesomeIcon icon={faChessKnight} fontSize="60px"/></td>
          <td className='g'><FontAwesomeIcon icon={faChessBishop} fontSize="60px"/></td>
          <td className='w'><FontAwesomeIcon icon={faChessQueen} fontSize="60px"/></td>
          <td className='g'><FontAwesomeIcon icon={faChessKing} fontSize="60px"/></td>
          <td className='w'><FontAwesomeIcon icon={faChessBishop} fontSize="60px"/></td>
          <td className='g'><FontAwesomeIcon icon={faChessKnight} fontSize="60px"/></td>
          <td className='w'><FontAwesomeIcon icon={faChessRook} fontSize="60px"/></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
