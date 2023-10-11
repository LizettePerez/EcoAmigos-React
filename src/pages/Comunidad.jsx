import '../index.css';
import Login from '../components/Login';
import CommunityImg from '../assets/community.png';

function Comunidad() {
  return (
    <div>
      <section className="container communityContainer">
        <section className="communityImg">
          <img src={CommunityImg} alt="communityImg" className="communityImg imgAside" />
        </section>
        <section className="formCommunity">
          <Login />
        </section>

      </section>
    </div>
  )
}

export default Comunidad