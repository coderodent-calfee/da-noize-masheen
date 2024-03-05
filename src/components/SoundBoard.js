/**
 * This file is a Noise Button component
 *
 */
import React from "react";
import NoiseButton from "./noiseButton";

function SoundBoard() {
    return (
        <div className="buttons-container grid-style ">
            <div>
                0
            </div>
            <div>1</div>
            <div>
                <NoiseButton/>
            </div>
            <div>3</div>
            <div>4</div>
            <div>
                <NoiseButton/>
            </div>
            <div>6</div>
            <div>
                <NoiseButton/>
            </div>
            <div>8</div>
            <div>
                <NoiseButton/>
            </div>
            <div>10</div>
            <div>11</div>
            <div>
                <NoiseButton/>
            </div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
            <div>
                <NoiseButton/>
            </div>
            <div>17</div>
            <div>18</div>
            <div>19</div>
            <div>20</div>
            <div>
                <NoiseButton/>
            </div>
            <div>
                <NoiseButton/>
            </div>
            <div>
                <NoiseButton/>
            </div>
            <div>
                <NoiseButton/>
            </div>
            <div>
                <NoiseButton/>
            </div>
            <div>
                <NoiseButton/>
            </div>
            <div>
                <NoiseButton/>
            </div>
            <div>
                <NoiseButton/>
            </div>
            <div>
                <NoiseButton/>
            </div>
        </div>
    );
}

// Export out the React Component
export default SoundBoard;