import React from 'react';
import {Layer, Rect, Stage, Group} from 'react-konva';
import Mosquito from './Mosquito';


function CanvasComponent() {
    // Stage - is a div wrapper
    // Layer - is a <canvas> element on the page
    // so you can use several canvases. It may help you to improve performance a lot.
    return (
      <Stage width={800} height={600}>
        <Layer>
            <Mosquito/>
        </Layer>
      </Stage>
    );
}

module.exports = CanvasComponent;