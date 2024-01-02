import { memo } from 'react';
import type { FC } from 'react';
import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders/glTF';



import resets from '../../_resets.module.css';
import { Rectangle1 } from '../Rectangle1/Rectangle1.js';
import classes from './AndroidLarge12.module.css';
import { Polygon1Icon } from './Polygon1Icon.js';
import { Polygon2Icon } from './Polygon2Icon.js';
import { Polygon3Icon } from './Polygon3Icon.js';
import { Polygon4Icon } from './Polygon4Icon.js';
import { Polygon5Icon } from './Polygon5Icon.js';
import { Polygon6Icon } from './Polygon6Icon.js';
import { Rectangle4Icon } from './Rectangle4Icon.js';
import { Rectangle11Icon } from './Rectangle11Icon.js';
import { Rectangle12Icon } from './Rectangle12Icon.js';


interface Props {
  className?: string;
  targetPosition: number;
}
/* @figmaId 100:9 */
export const AndroidLarge12: FC<Props> = memo(function AndroidLarge12(props) {
  const { targetPosition, ...restProps } = props;
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
       <div id="Home" style={{ height: '105px' , width: '100vw'}}>
        <Rectangle1 className={classes.rectangle1} />
         <div className={classes.sGVPLogo_White2}></div>
        <div className={classes.cARNIVAL}>CARNIVAL</div>
        <div className={classes.sGVP}>S.G.V.P.</div>
        <div className={classes.rectangle10}></div>
        <div className={classes.welcomeToSGVPInternationalScho}>
         <div className={classes.textBlock}>Welcome to SGVP International School:</div>
         <div className={classes.textBlock2}>
            <p className={classes.labelWrapper}>
             <span className={classes.label}>
                Nestled in the heart of Ahmedabad, SGVP International School stands as a beacon of academic brilliance,
                innovation, and holistic development. Established with a vision to nurture young minds and inspire a love
                for learning, SGVP is more than just an institution; it is a vibrant community committed to shaping the
                leaders and change makers of tomorrow.
              </span>
           </p>
          </div>
       </div>
       <div className={classes._2DGUIDE}>2D GUIDE</div>
       <div className={classes._3DGUIDE}>3D GUIDE</div>
        <div className={classes.polygon1}>
          <Polygon1Icon className={classes.icon} targetPosition={targetPosition} />
        </div>
        <div className={classes.polygon3}>
          <Polygon3Icon className={classes.icon2} />
        </div>
       <div className={classes.rectangle4}>
          <Rectangle4Icon className={classes.icon3} />
       </div>
         </div>
      <div className={classes._2D}>
        <div className={classes.arrowContainer}>
          <div className={classes.rectangle102}></div>
          <div className={classes.sgvp2dView1}></div>
          <div className={classes._2DGUIDE2}>2D GUIDE</div>
          <div className={classes.cARNIVAL2}>CARNIVAL</div>
          <div className={classes.sGVP2}>S.G.V.P.</div>
          <div className={classes.oF}>OF</div>
          <div className={classes.polygon2}>
            <Polygon2Icon className={classes.icon4} targetPosition={1} />
          </div>
           <div className={classes.polygon6}>
              <Polygon6Icon className={classes.icon5} targetPosition={1} />
          </div>
          </div>
        </div>
      <div className={classes._3D}>
        <div className={classes._3DGUIDE2}>3D GUIDE</div>
        <div className={classes.topics}>Topics</div>
        <div className={classes.rectangle8}></div>
        <div className={classes._3DGUIDE3}>3D GUIDE</div>
        <div className={classes.home}>
        <div className={classes.textBlock3}>home</div>
        <div className={classes.textBlock4}>
         </div>
         </div>
          <div className={classes.rectangle9}>
              
          </div>
        <div className={classes.oF2}>OF</div>
        <div className={classes.sGVP3}>S.G.V.P.</div>
        <div className={classes.cARNIVAL3}>CARNIVAL</div>
        <div className={classes.polygon4}>
          <Polygon4Icon className={classes.icon6} targetPosition={1} />
        </div>
        <div className={classes.removal5521}></div>
         <div className={classes.scroolTo}></div>
        <div className={classes.scroolTo2d}></div>
         <div className={classes.scroolTo3d}></div>
        <div className={classes.rectangle11}>
        <Rectangle11Icon className={classes.icon7} />
        </div>
       
       </div>
      <div className={classes._info}>
       <div className={classes.rectangle12}>
        <Rectangle12Icon className={classes.icon8} />
      </div>
      <div className={classes.roomNo19HistoryEvolutionOfTheC}>
        <div className={classes.textBlock5}>Room No. </div>
        <div className={classes.textBlock6}>----------------------- </div>
        <div className={classes.textBlock7}>19.History &amp; Evolution of the city</div>
        <div className={classes.textBlock8}>-----------------------</div>
        <div className={classes.textBlock9}>20.Swaminarayan Mandir to </div>
        <div className={classes.textBlock10}> famous Heritage Sites</div>
        <div className={classes.textBlock11}>-----------------------</div>
        <div className={classes.textBlock12}>21.How Ahmedabad became </div>
        <div className={classes.textBlock13}> World Heritage City ?</div>
        <div className={classes.textBlock14}>-----------------------</div>
        <div className={classes.textBlock15}>22.Ancient Pol culture </div>
        <div className={classes.textBlock16}> -Infrastructure </div>
        <div className={classes.textBlock17}> -OL - shop + residence</div>
        <div className={classes.textBlock18}>-----------------------</div>
        <div className={classes.textBlock19}>23.Process of Heritage </div>
        <div className={classes.textBlock20}> -grade I,II,III</div>
        <div className={classes.textBlock21}>----------------------- </div>
        <div className={classes.textBlock22}>24.Textile,Literure</div>
        <div className={classes.textBlock23}>-----------------------</div>
        <div className={classes.textBlock24}>25.Charkha - Models to be </div>
        <div className={classes.textBlock25}> displayed-process and </div>
        <div className={classes.textBlock26}> clothes to be made</div>
        <div className={classes.textBlock27}>-----------------------</div>
        <div className={classes.textBlock28}>26.Costumes - Evolution</div>
        <div className={classes.textBlock29}>-----------------------</div>
        <div className={classes.textBlock30}>27. Heritage/Modern Art </div>
        <div className={classes.textBlock31}> Gallery</div>
        <div className={classes.textBlock32}>-----------------------</div>
        <div className={classes.textBlock33}>39.Grade 1</div>
        <div className={classes.textBlock34}>37.Grade 2</div>
        <div className={classes.textBlock35}>38.Grade 3</div>
        <div className={classes.textBlock36}>42.Grade 4</div>
        <div className={classes.textBlock37}>40&amp;41.pre-primary</div>
        <div className={classes.textBlock38}>-----------------------</div>
        <div className={classes.textBlock39}>46.Vaarso - toy Museum</div>
        <div className={classes.textBlock40}>-----------------------</div>
        <div className={classes.textBlock41}>47.Famous Cuisine</div>
        <div className={classes.textBlock42}>-----------------------</div>
        <div className={classes.textBlock43}>48.Calligraphy + Art Room</div>
        <div className={classes.textBlock44}>-----------------------</div>
        <div className={classes.textBlock45}>49.Music </div>
        <div className={classes.textBlock46}>-----------------------</div>
        <div className={classes.textBlock47}>50.Festivals</div>
        <div className={classes.textBlock48}>-----------------------</div>
        <div className={classes.textBlock49}>51.Skit Room</div>
        <div className={classes.textBlock50}>-----------------------</div>
        <div className={classes.textBlock51}>52.Gujarat Tourism</div>
        <div className={classes.textBlock52}>-----------------------</div>
        <div className={classes.textBlock53}>53.Research and Innovation</div>
        <div className={classes.textBlock54}> -Education Sector/Career</div>
        <div className={classes.textBlock55}> Opportunities + Career </div>
        <div className={classes.textBlock56}> Opportunities</div>
        <div className={classes.textBlock57}>-----------------------</div>
        <div className={classes.textBlock58}>54.New possible start ups in </div>
        <div className={classes.textBlock59}> Ahmedabad </div>
      </div>
      <div className={classes._2DGUIDE3}>2D GUIDE</div>
      <div className={classes.polygon5}>
          <Polygon5Icon className={classes.icon9} targetPosition={1} />
        </div>
        <div className={classes.rectangle13}></div>
      </div>
    </div>
    
  );
});
