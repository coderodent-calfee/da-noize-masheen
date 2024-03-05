/**
 * This file is a Noise Button component
 *
 */

function NoiseButton() {
    return (
        <div>
            <button className="pushable">
              <span className="front">Revolver
                <img src="/icons/revolver-gun-svgrepo-com.svg" alt="revolver-gun-svgrepo-com.svg" />
              </span>
            </button>
        </div>
    );
}

// Export out the React Component
export default NoiseButton;