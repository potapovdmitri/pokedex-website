import React from "react";
import styled from "styled-components";
import "../../../App.css";

const RightSide = styled.div`
  width: 23rem;
  height: 37rem;
  position: sticky;
  top: 100px;
`;
const StyledBigCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 3px solid black;
`;
const ImageForBigCard = styled.img`
  width: 15rem;
  border: 1px solid black;
  background-color: lightgray;
  margin-top: 1rem;
`;
const StyledTable = styled.table`
  width: 20rem;
  height: 16rem;
  font-size: 15px;
  border: 2px solid grey;
  border-collapse: collapse;
  margin-top: 1rem;
`;

const BigCard = ({ details }) => {
  return (
    <RightSide className="right-side">
      {details.pokemonName ? (
        <StyledBigCard>
          <ImageForBigCard src={details.imageSrc} alt={details.pokemonName} />
          <h3 style={{ marginTop: "1rem", fontSize: "24px" }}>
            {details.pokemonName} #{details.gameIndex}
          </h3>
          {/* Due to no information about pokemon's characteristics order hardcoded as in example below */}
          <StyledTable>
            <tbody>
              <tr>
                <td className="left-side-col">Type</td>
                <td className="right-side-col">
                  {details.types
                    ? details.types.map((el) => {
                        return (
                          <p>
                            {el.type.name.charAt(0).toUpperCase() +
                              el.type.name.slice(1)}
                          </p>
                        );
                      })
                    : null}
                </td>
              </tr>
              <tr>
                <td className="left-side-col">Attack</td>
                <td className="right-side-col">
                  {details.stats ? details.stats[1].base_stat : null}
                </td>
              </tr>
              <tr>
                <td className="left-side-col">Defense</td>
                <td className="right-side-col">
                  {details.stats ? details.stats[2].base_stat : null}
                </td>
              </tr>
              <tr>
                <td className="left-side-col">HP</td>
                <td className="right-side-col">
                  {details.stats ? details.stats[0].base_stat : null}
                </td>
              </tr>
              <tr>
                <td className="left-side-col">SP Attack</td>
                <td className="right-side-col">
                  {details.stats ? details.stats[3].base_stat : null}
                </td>
              </tr>
              <tr>
                <td className="left-side-col">SP Defense</td>
                <td className="right-side-col">
                  {details.stats ? details.stats[4].base_stat : null}
                </td>
              </tr>
              <tr>
                <td className="left-side-col">Speed</td>
                <td className="right-side-col">
                  {details.stats ? details.stats[5].base_stat : null}
                </td>
              </tr>
              <tr>
                <td className="left-side-col">Weight</td>
                <td className="right-side-col">{details.weight}</td>
              </tr>
              <tr>
                <td className="left-side-col">Total moves</td>
                <td className="right-side-col">{details.moves}</td>
              </tr>
            </tbody>
          </StyledTable>
        </StyledBigCard>
      ) 
      : 
      <StyledBigCard></StyledBigCard>
      }
    </RightSide>
  );
};

export default BigCard;
