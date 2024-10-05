import "./statistics.scss";
import { signOut } from "next-auth/react";
export default function Statistics() {
  return (
    <>
      <div id="statistics-container">
        <div id="title-stats" onClick={() => signOut({ callbackUrl: "/" })}>
          <span id="leet-stats">Leet</span>
          <span id="buddy-stats">Buddy</span>
        </div>
        <div id="user-stats">
          <div id="questions">
            <div id="easy">
              <span id="number">23</span>
              <div id="bar" style={{ width: `${(23 / 1726) * 500}%`,backgroundColor:"#28C244"}}></div>
              <span id="number">1756</span>
              <span id="caption" style={{ color: "#28C244" }}>
                Easy
              </span>
            </div>
            <div id="medium">
              <span id="number">50</span>
              <div id="bar" style={{ width: `${(50 / 1726) * 500}%`,backgroundColor:"#FFA116" }}></div>
              <span id="number">1726</span>
              <span id="caption" style={{ color: "#FFA116" }}>
                Medium
              </span>
            </div>
            <div id="hard">
              <span id="number">7</span>
              <div id="bar" style={{ width: `${(7 / 756) * 500}%`,backgroundColor:"#F63737"}}></div>
              <span id="number">756</span>
              <span id="caption" style={{ color: "#F63737" }}>
                Hard
              </span>
            </div>
          </div>

          <div id="total-solved"></div>
          <div id="other-stats">
            <div id="reputation"></div>
            <div id="aceptance"></div>
            <div id="ranking"></div>
          </div>
        </div>
      </div>
    </>
  );
}
