import { useDispatch, useSelector } from 'react-redux';
import dance from './../assets/dance.png';
import { RootState } from '../services/store';

function Home() {
  const dispatch = useDispatch();
  const homeCounter = useSelector((state: RootState) => state.homeCounter);
  console.log(homeCounter);

  return (
    <>
      <h1>Home Rick and Morty</h1>
      <a href="https://rickandmortyapi.com/documentation/" target="blank">
        Link to API documentation
      </a>
      <p>
        Rick and Morty is the Emmy award-winning half-hour animated hit comedy
        series on Adult Swim that follows a sociopathic genius scientist who
        drags his inherently timid grandson on insanely dangerous adventures
        across the universe. Rick Sanchez is living with his daughter Beth’s
        family and constantly bringing her, his son-in-law Jerry, granddaughter
        Summer, and grandson Morty into intergalactic escapades.
      </p>
      <p>
        Rick and Morty stars Justin Roiland (Adventure Time), Sarah Chalke
        (Scrubs), Chris Parnell (Saturday Night Live), and Spencer Grammer
        (Greek). The series is created by Dan Harmon (Community) and Roiland,
        who also serve as executive producers.
      </p>
      <div className="buttons_holder">
        <button onClick={() => dispatch({ type: 'LESS_COUNTS' })}> - </button>
        <div>{homeCounter}</div>
        <button onClick={() => dispatch({ type: 'MORE_COUNTS' })}> + </button>
      </div>
      <img className="RM_home" src={dance} alt="Rick and Morty" />
    </>
  );
}

export default Home;
