import React from 'react';
import BarChart from './BarChart';
import './App.css';
import Bullet from "./Bullet";

//Field
const geojson1 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Field 1"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              31.201987,
              48.338124
            ],
            [
              31.201987,
              48.33813845
            ],
            [
              31.202073712,
              48.3381818
            ],
            [
              31.2023483,
              48.33822515
            ],
            [
              31.202651787,
              48.33825405
            ],
            [
              31.202883025,
              48.3382974
            ],
            [
              31.20321545,
              48.33834075
            ],
            [
              31.203562325,
              48.338369662
            ],
            [
              31.203938075,
              48.33841305
            ],
            [
              31.204660663,
              48.338456437
            ],
            [
              31.205397725,
              48.33848535
            ],
            [
              31.2057735,
              48.3385287
            ],
            [
              31.2061059,
              48.33857205
            ],
            [
              31.206452738,
              48.33860095
            ],
            [
              31.2066406,
              48.3386443
            ],
            [
              31.20679955,
              48.33868765
            ],
            [
              31.20697295,
              48.33871655
            ],
            [
              31.207131912,
              48.3387599
            ],
            [
              31.2073776,
              48.33880325
            ],
            [
              31.207637738,
              48.33883215
            ],
            [
              31.207854525,
              48.3388755
            ],
            [
              31.20818695,
              48.33891885
            ],
            [
              31.208533825,
              48.33894775
            ],
            [
              31.208866225,
              48.3389911
            ],
            [
              31.20945875,
              48.33903445
            ],
            [
              31.210065725,
              48.339063362
            ],
            [
              31.210470375,
              48.33910675
            ],
            [
              31.21101955,
              48.339150137
            ],
            [
              31.211583175,
              48.33917905
            ],
            [
              31.211958925,
              48.3392224
            ],
            [
              31.21246475,
              48.33926575
            ],
            [
              31.212985025,
              48.33929465
            ],
            [
              31.2132018,
              48.339338
            ],
            [
              31.21327405,
              48.33938135
            ],
            [
              31.21336075,
              48.33941025
            ],
            [
              31.213433013,
              48.3394536
            ],
            [
              31.21349085,
              48.3395114
            ],
            [
              31.213548688,
              48.3395692
            ],
            [
              31.2136065,
              48.339655912
            ],
            [
              31.213620937,
              48.33980045
            ],
            [
              31.21354865,
              48.339916088
            ],
            [
              31.213447462,
              48.3399161
            ],
            [
              31.2133752,
              48.33990165
            ],
            [
              31.2133174,
              48.3399739
            ],
            [
              31.2132596,
              48.3400895
            ],
            [
              31.2132018,
              48.3402051
            ],
            [
              31.213144,
              48.340320713
            ],
            [
              31.2130862,
              48.34043635
            ],
            [
              31.2130284,
              48.340551987
            ],
            [
              31.2129706,
              48.3406676
            ],
            [
              31.2129128,
              48.34076875
            ],
            [
              31.212854987,
              48.340841
            ],
            [
              31.21279715,
              48.340942162
            ],
            [
              31.212724863,
              48.34113005
            ],
            [
              31.2126237,
              48.341332388
            ],
            [
              31.21252255,
              48.3414769
            ],
            [
              31.2124503,
              48.3415925
            ],
            [
              31.2123925,
              48.3417081
            ],
            [
              31.2123347,
              48.341823713
            ],
            [
              31.2122769,
              48.34193935
            ],
            [
              31.2122191,
              48.342083888
            ],
            [
              31.212146838,
              48.3422862
            ],
            [
              31.21204565,
              48.342531863
            ],
            [
              31.211944462,
              48.34280645
            ],
            [
              31.2118722,
              48.343037688
            ],
            [
              31.2118144,
              48.3431533
            ],
            [
              31.2117566,
              48.343240012
            ],
            [
              31.2116988,
              48.34338455
            ],
            [
              31.211641,
              48.343529088
            ],
            [
              31.211568737,
              48.3436158
            ],
            [
              31.21146755,
              48.34368805
            ],
            [
              31.211366363,
              48.3437892
            ],
            [
              31.2112941,
              48.343904812
            ],
            [
              31.2112363,
              48.34402045
            ],
            [
              31.2111785,
              48.344136087
            ],
            [
              31.2111207,
              48.3442517
            ],
            [
              31.2110629,
              48.34435285
            ],
            [
              31.2110051,
              48.3444251
            ],
            [
              31.2109473,
              48.34449735
            ],
            [
              31.21087505,
              48.3445985
            ],
            [
              31.2107739,
              48.344699662
            ],
            [
              31.210672738,
              48.34477195
            ],
            [
              31.21060045,
              48.344829787
            ],
            [
              31.210542612,
              48.3448876
            ],
            [
              31.2104848,
              48.3449454
            ],
            [
              31.21038365,
              48.3450032
            ],
            [
              31.2101958,
              48.345061
            ],
            [
              31.210007937,
              48.3451188
            ],
            [
              31.20990675,
              48.3451477
            ],
            [
              31.209848913,
              48.3451188
            ],
            [
              31.209689937,
              48.34507545
            ],
            [
              31.2093431,
              48.34504655
            ],
            [
              31.209010712,
              48.3450032
            ],
            [
              31.208736125,
              48.34495985
            ],
            [
              31.20830255,
              48.34493095
            ],
            [
              31.207883425,
              48.3448876
            ],
            [
              31.207565487,
              48.34484425
            ],
            [
              31.2070886,
              48.344815338
            ],
            [
              31.206626163,
              48.34477195
            ],
            [
              31.206337125,
              48.344728563
            ],
            [
              31.20599025,
              48.34469965
            ],
            [
              31.205657825,
              48.3446563
            ],
            [
              31.205354325,
              48.34461295
            ],
            [
              31.20483405,
              48.34458405
            ],
            [
              31.204328225,
              48.3445407
            ],
            [
              31.203981388,
              48.34449735
            ],
            [
              31.2035045,
              48.34446845
            ],
            [
              31.20304205,
              48.3444251
            ],
            [
              31.202680737,
              48.34438175
            ],
            [
              31.202117113,
              48.34435285
            ],
            [
              31.20156795,
              48.3443095
            ],
            [
              31.201177725,
              48.34426615
            ],
            [
              31.200614063,
              48.34423725
            ],
            [
              31.200064875,
              48.3441939
            ],
            [
              31.199660225,
              48.34415055
            ],
            [
              31.19905325,
              48.344121638
            ],
            [
              31.198460725,
              48.34407825
            ],
            [
              31.198027175,
              48.344034863
            ],
            [
              31.19737685,
              48.34400595
            ],
            [
              31.196740975,
              48.3439626
            ],
            [
              31.196292962,
              48.34391925
            ],
            [
              31.1956426,
              48.34389035
            ],
            [
              31.195006688,
              48.343847
            ],
            [
              31.194616487,
              48.34380365
            ],
            [
              31.1941396,
              48.34377475
            ],
            [
              31.19367715,
              48.3437314
            ],
            [
              31.193301375,
              48.34368805
            ],
            [
              31.192694362,
              48.34365915
            ],
            [
              31.192101825,
              48.3436158
            ],
            [
              31.191726075,
              48.34357245
            ],
            [
              31.19124915,
              48.34354355
            ],
            [
              31.190786675,
              48.3435002
            ],
            [
              31.190367575,
              48.34345685
            ],
            [
              31.18963055,
              48.343427938
            ],
            [
              31.188907975,
              48.34338455
            ],
            [
              31.1886334,
              48.343326713
            ],
            [
              31.188575588,
              48.3432689
            ],
            [
              31.18851775,
              48.3431822
            ],
            [
              31.188488825,
              48.3430377
            ],
            [
              31.18851775,
              48.342878738
            ],
            [
              31.188575588,
              48.34274865
            ],
            [
              31.1886334,
              48.342633013
            ],
            [
              31.1886912,
              48.3425174
            ],
            [
              31.188749,
              48.342300638
            ],
            [
              31.1887779,
              48.34188155
            ],
            [
              31.188749,
              48.341534712
            ],
            [
              31.1886912,
              48.3415347
            ],
            [
              31.1886334,
              48.341606938
            ],
            [
              31.1886045,
              48.34147685
            ],
            [
              31.1886334,
              48.341216712
            ],
            [
              31.1886912,
              48.3408988
            ],
            [
              31.188749,
              48.340566438
            ],
            [
              31.1888068,
              48.34026295
            ],
            [
              31.1888646,
              48.3400028
            ],
            [
              31.1889224,
              48.33980045
            ],
            [
              31.1889802,
              48.33955475
            ],
            [
              31.189038,
              48.33916455
            ],
            [
              31.1890958,
              48.338731
            ],
            [
              31.189168062,
              48.33835525
            ],
            [
              31.18926925,
              48.3380084
            ],
            [
              31.189370437,
              48.33766155
            ],
            [
              31.1894427,
              48.337386962
            ],
            [
              31.1895005,
              48.3372569
            ],
            [
              31.1896161,
              48.3370835
            ],
            [
              31.190468763,
              48.3371413
            ],
            [
              31.19065665,
              48.33718465
            ],
            [
              31.190830088,
              48.3371991
            ],
            [
              31.1908879,
              48.3371991
            ],
            [
              31.1911191,
              48.3371991
            ],
            [
              31.192174138,
              48.3372569
            ],
            [
              31.1922753,
              48.33730025
            ],
            [
              31.192362,
              48.3373147
            ],
            [
              31.1923909,
              48.3373147
            ],
            [
              31.1934314,
              48.3373147
            ],
            [
              31.1935471,
              48.3373147
            ],
            [
              31.1935471,
              48.33732915
            ],
            [
              31.193662713,
              48.3373725
            ],
            [
              31.1945876,
              48.3374303
            ],
            [
              31.1945876,
              48.33744475
            ],
            [
              31.194659863,
              48.3374881
            ],
            [
              31.1951657,
              48.3374303
            ],
            [
              31.19562815,
              48.33753145
            ],
            [
              31.195888288,
              48.3375459
            ],
            [
              31.195975,
              48.3375459
            ],
            [
              31.19598945,
              48.3375459
            ],
            [
              31.1960328,
              48.33756035
            ],
            [
              31.196119513,
              48.3376037
            ],
            [
              31.1962785,
              48.33764705
            ],
            [
              31.196451938,
              48.337675963
            ],
            [
              31.196639812,
              48.33771935
            ],
            [
              31.19695775,
              48.337748275
            ],
            [
              31.1973624,
              48.33771935
            ],
            [
              31.19776705,
              48.337661512
            ],
            [
              31.1987498,
              48.3375459
            ],
            [
              31.19890875,
              48.337675963
            ],
            [
              31.198981,
              48.33771935
            ],
            [
              31.1990388,
              48.337777188
            ],
            [
              31.199154413,
              48.337835
            ],
            [
              31.1994001,
              48.33787835
            ],
            [
              31.199660238,
              48.3378928
            ],
            [
              31.19977585,
              48.3378928
            ],
            [
              31.1997903,
              48.3378928
            ],
            [
              31.1997903,
              48.33790725
            ],
            [
              31.1999059,
              48.3380084
            ],
            [
              31.2007153,
              48.3380084
            ],
            [
              31.20072975,
              48.3380084
            ],
            [
              31.2007731,
              48.33802285
            ],
            [
              31.200946512,
              48.3380662
            ],
            [
              31.201987,
              48.338124
            ]
          ],
          [
            [
              31.1888646,
              48.3409277
            ],
            [
              31.1888357,
              48.3409566
            ],
            [
              31.1888646,
              48.3409855
            ],
            [
              31.1888935,
              48.3409566
            ],
            [
              31.1888646,
              48.3409277
            ]
          ]
        ]
      }
    }
  ]
};

//D3 example
const geojson2 = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "Africa"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[-6, 36], [33, 30], [43, 11], [51, 12], [29, -33], [18, -35], [7, 5], [-17, 14], [-6, 36]]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Australia"
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [[[143, -11], [153, -28], [144, -38], [131, -31], [116, -35], [114, -22], [136, -12], [140, -17], [143, -11]]]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name": "Timbuktu"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [-3.0026, 16.7666]
      }
    }
  ]
};

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <Bullet data={geojson2} />
        </header>
      </div>
  );
}

export default App;