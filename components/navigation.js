import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function Navigation() {
  const [target, setTarget] = useState("");
  return (
    <div>
      <div className="navigation-wrapper">
        <Link offset={-25} to="couple" smooth={true} duration={1500}>
          <div
            className={
              target == "couple"
                ? "navigation-item scale-up"
                : "navigation-item"
            }
            onClick={(e) => setTarget("couple")}
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <svg
              version={1.0}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M2291 4495 c-142 -31 -280 -94 -388 -178 -86 -67 -204 -193 -255
-272 -71 -112 -98 -183 -133 -348 l-6 -28 -42 26 c-280 174 -598 196 -885 60
-127 -60 -200 -114 -312 -232 -298 -311 -345 -678 -150 -1173 210 -533 773
-1180 1360 -1565 172 -113 289 -175 330 -175 39 0 151 61 327 176 238 157 411
300 636 527 l168 169 92 -60 c120 -78 235 -142 267 -148 33 -7 161 60 331 172
584 384 1137 1014 1357 1544 92 220 126 372 126 560 1 157 -20 250 -84 387
-52 111 -88 162 -189 267 -161 165 -326 257 -539 297 -94 18 -300 7 -387 -21
-175 -55 -364 -172 -525 -326 l-80 -77 -83 80 c-182 176 -360 281 -566 334
-89 23 -272 25 -370 4z m335 -205 c192 -49 404 -194 563 -384 98 -117 149
-125 222 -33 98 124 224 235 359 316 127 78 262 121 375 120 111 0 284 -47
374 -101 70 -42 173 -130 226 -195 185 -225 217 -477 104 -828 -35 -109 -146
-337 -224 -460 -202 -321 -521 -669 -862 -938 -93 -74 -300 -214 -386 -261
l-67 -38 -48 27 c-98 57 -192 119 -192 127 0 5 22 36 48 71 258 332 426 682
478 988 21 130 15 320 -16 424 -83 285 -317 543 -593 651 -373 147 -718 56
-1090 -287 l-89 -82 -49 49 c-46 46 -49 51 -49 100 0 68 23 184 50 257 49 130
202 307 333 386 169 101 364 134 533 91z m-1511 -666 c182 -40 374 -171 568
-385 43 -48 88 -89 100 -91 49 -9 84 11 143 84 153 186 387 346 577 393 241
59 511 -34 709 -243 170 -180 235 -395 194 -643 -64 -386 -343 -854 -761
-1275 -263 -264 -519 -467 -778 -613 l-58 -33 -82 47 c-385 223 -806 605
-1104 1005 -201 268 -343 561 -399 820 -21 99 -24 281 -5 350 74 271 277 484
543 570 121 39 221 43 353 14z"
                />
              </g>
            </svg>
          </div>
        </Link>
        <Link offset={-25} to="resepsi" duration={1500} smooth={true}>
          <div
            className={
              target == "resepsi"
                ? "navigation-item scale-up"
                : "navigation-item"
            }
            onClick={(e) => setTarget("resepsi")}
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <svg
              version={1.0}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M323 4858 c4 -144 9 -198 25 -253 11 -38 20 -70 19 -71 -1 -1 -31
-16 -67 -34 -75 -38 -240 -148 -240 -161 0 -19 138 -235 190 -297 67 -80 172
-162 262 -205 l68 -32 -8 -35 c-4 -19 -7 -71 -7 -115 0 -67 -4 -85 -22 -108
-11 -15 -29 -47 -39 -71 -14 -34 -26 -46 -54 -56 -130 -47 -220 -184 -207
-320 7 -76 44 -158 96 -208 l41 -39 -110 -1024 c-60 -563 -112 -1043 -115
-1066 l-6 -43 138 0 c126 0 193 9 255 35 16 7 18 -2 18 -93 l0 -101 -189 -3
c-207 -3 -216 -6 -265 -72 -19 -25 -21 -42 -21 -166 0 -151 5 -167 69 -214 27
-21 37 -21 646 -21 609 0 619 0 646 21 64 47 69 63 69 214 0 124 -2 141 -21
166 -49 66 -58 69 -265 72 l-189 3 0 354 0 354 55 36 c63 42 173 158 181 191
3 12 -15 127 -41 255 -25 129 -47 240 -48 248 -1 8 28 24 78 43 416 153 780
442 1028 818 83 126 183 329 229 462 18 54 35 98 38 98 3 0 20 -44 38 -98 46
-133 146 -336 229 -462 242 -367 577 -639 987 -801 73 -29 120 -53 119 -61 -1
-7 -23 -118 -48 -247 -26 -128 -44 -243 -41 -255 8 -33 118 -149 181 -191 l55
-36 0 -354 0 -354 -189 -3 c-207 -3 -216 -6 -265 -72 -19 -25 -21 -42 -21
-166 0 -151 5 -167 69 -214 27 -21 37 -21 646 -21 609 0 619 0 646 21 64 47
69 63 69 214 0 124 -2 141 -21 166 -49 66 -58 69 -265 72 l-189 3 0 101 c0 91
2 100 18 93 62 -26 129 -35 255 -35 l138 0 -6 43 c-3 23 -55 503 -115 1066
l-110 1024 41 39 c64 62 94 136 94 233 0 73 -3 86 -36 145 -39 71 -104 128
-168 150 -28 9 -41 20 -49 44 -21 58 -72 124 -119 155 -41 27 -51 42 -83 118
-159 387 -440 704 -800 906 -292 164 -586 237 -957 237 l-148 0 -24 35 c-46
68 -163 125 -257 125 -124 0 -250 -90 -294 -210 -11 -28 -25 -41 -77 -66 l-63
-31 -64 31 c-53 26 -65 37 -76 68 -22 64 -80 129 -150 167 -60 33 -71 36 -150
36 -72 0 -92 -4 -136 -27 -54 -28 -97 -65 -130 -112 l-21 -29 -68 42 c-157 94
-309 131 -543 131 l-144 0 5 -182z m392 2 c57 -16 143 -50 193 -78 l43 -24
-51 -50 c-27 -27 -50 -53 -50 -58 0 -5 -30 -11 -67 -15 -66 -7 -181 -26 -235
-40 -25 -6 -28 -4 -43 47 -9 29 -19 95 -22 147 l-6 94 99 -6 c54 -4 117 -11
139 -17z m733 -7 c48 -36 65 -69 70 -134 l5 -62 -29 20 c-81 56 -186 57 -266
1 l-28 -19 0 45 c0 77 33 134 95 162 40 19 119 12 153 -13z m880 0 c48 -36 65
-69 70 -134 l5 -62 -29 20 c-81 56 -186 57 -266 1 l-28 -19 0 45 c0 77 33 134
95 162 40 19 119 12 153 -13z m605 -148 c561 -73 1035 -410 1287 -914 55 -109
58 -121 33 -121 -10 0 -42 -11 -72 -25 -30 -14 -55 -24 -56 -23 -1 2 -23 45
-49 97 -25 51 -74 134 -109 185 -77 114 -253 290 -372 375 -102 71 -292 167
-408 205 -87 28 -270 66 -322 66 -50 0 -82 15 -89 43 -3 14 -21 48 -40 76
l-35 51 59 0 c33 0 110 -7 173 -15z m-1771 -92 c-10 -16 -24 -43 -30 -62 -23
-66 -11 -144 30 -203 l19 -28 -46 0 c-59 0 -104 19 -138 59 -48 57 -48 145 0
202 34 40 75 58 136 59 l48 0 -19 -27z m505 10 c33 -15 34 -18 27 -52 -11 -47
-11 -137 -1 -178 7 -27 5 -32 -12 -38 -35 -11 -107 -91 -132 -147 -22 -49 -29
-56 -101 -92 -64 -32 -84 -38 -115 -33 -77 13 -125 70 -131 158 l-5 62 29 -20
c98 -68 212 -56 299 32 81 80 96 170 47 269 l-29 56 45 0 c24 0 60 -7 79 -17z
m375 -10 c-10 -16 -24 -43 -30 -62 -23 -66 -11 -144 30 -203 l19 -28 -46 0
c-59 0 -104 19 -138 59 -48 57 -48 145 0 202 34 40 75 58 136 59 l48 0 -19
-27z m525 1 c52 -39 68 -71 68 -134 0 -95 -54 -151 -154 -158 l-59 -4 29 57
c20 40 29 73 29 105 0 32 -9 65 -29 105 l-29 57 59 -4 c38 -3 69 -11 86 -24z
m-1152 -79 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80 80 80 19
0 40 -9 55 -25z m880 0 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39
80 80 80 19 0 40 -9 55 -25z m-1495 -73 c0 -34 30 -119 55 -156 13 -20 21 -36
17 -36 -4 0 -72 11 -152 25 -80 14 -146 25 -146 25 -4 0 -25 -153 -21 -156 4
-4 279 -54 299 -54 4 0 -5 -26 -20 -57 -24 -53 -33 -61 -90 -89 l-63 -31 -89
44 c-108 54 -209 143 -276 245 -55 82 -59 74 66 137 113 57 227 92 380 115 14
2 28 4 33 5 4 0 7 -7 7 -17z m2029 -782 c115 -606 529 -1106 1099 -1325 63
-25 73 -32 68 -49 -2 -12 -9 -47 -16 -78 l-11 -57 -57 20 c-254 93 -506 254
-702 450 -287 287 -476 655 -546 1064 -19 108 -32 505 -17 505 22 0 96 85 121
138 l27 57 6 -305 c5 -253 10 -325 28 -420z m251 668 c41 -11 103 -31 136 -45
l61 -24 6 -227 c4 -196 9 -241 30 -332 70 -291 189 -486 442 -721 33 -31 79
-76 102 -101 23 -25 65 -55 95 -69 48 -21 56 -29 85 -90 l33 -66 -18 -89 c-17
-84 -20 -89 -43 -87 -47 5 -304 142 -399 213 -333 250 -547 595 -626 1010 -11
60 -17 169 -21 372 l-5 287 23 -6 c13 -3 58 -14 99 -25z m-911 -96 c57 -20
113 -14 176 17 l57 29 -4 -59 c-7 -100 -63 -154 -158 -154 -96 0 -151 54 -158
156 l-5 62 29 -20 c16 -11 44 -25 63 -31z m-310 -54 c54 -26 71 -40 80 -64 19
-53 70 -120 112 -150 23 -16 71 -38 108 -50 61 -19 67 -24 75 -56 26 -104 -52
-198 -167 -198 l-44 0 29 56 c49 99 34 189 -47 269 -87 87 -201 100 -297 33
l-28 -19 0 45 c0 24 5 57 10 72 11 29 74 94 91 94 6 0 41 -15 78 -32z m1790
-172 c150 -144 255 -294 326 -468 47 -113 46 -118 -21 -147 -66 -29 -136 -97
-161 -157 -10 -24 -21 -44 -25 -44 -13 0 -119 138 -168 220 -108 179 -149 334
-157 584 l-6 179 64 -44 c35 -23 101 -79 148 -123z m-2518 -5 c29 -29 70 -58
103 -72 57 -23 60 -27 50 -66 -6 -22 -7 -23 -33 -4 -78 54 -184 54 -263 -1
l-28 -19 0 46 c0 26 7 62 16 81 18 39 68 84 91 84 9 0 37 -22 64 -49z m1339
-196 c-46 -453 -239 -861 -559 -1182 -195 -197 -447 -359 -703 -452 l-57 -20
-11 57 c-7 31 -14 66 -16 78 -5 17 5 24 68 49 504 195 905 629 1053 1142 19
64 33 92 61 121 57 58 88 134 89 217 0 39 -3 81 -7 95 -5 22 0 29 40 56 l47
31 3 -41 c2 -23 -1 -90 -8 -151z m-828 148 c-10 -16 -24 -43 -30 -62 -23 -66
-11 -144 30 -203 l19 -28 -46 0 c-59 0 -104 19 -138 59 -48 57 -48 145 0 202
34 40 75 58 136 59 l48 0 -19 -27z m253 -78 c50 -49 15 -135 -55 -135 -41 0
-80 39 -80 80 0 41 39 80 80 80 19 0 40 -9 55 -25z m-973 -82 c-22 -33 -42
-87 -42 -117 0 -20 -5 -21 -80 -21 -88 0 -91 3 -69 62 24 65 83 102 162 103
l48 0 -19 -27z m253 -78 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41
39 80 80 80 19 0 40 -9 55 -25z m594 -123 c57 -20 113 -14 176 17 l57 29 -4
-59 c-7 -100 -63 -154 -158 -154 -96 0 -151 54 -158 156 l-5 62 29 -20 c16
-11 44 -25 63 -31z m-325 -53 c14 -13 -51 -39 -97 -39 l-44 0 26 53 26 54 40
-30 c22 -17 44 -34 49 -38z m-556 -66 c48 -36 65 -69 70 -134 l5 -62 -29 20
c-81 56 -186 57 -266 1 l-28 -19 0 45 c0 77 33 134 95 162 40 19 119 12 153
-13z m3520 0 c48 -36 65 -69 70 -134 l5 -62 -29 20 c-81 56 -186 57 -266 1
l-28 -19 0 45 c0 77 33 134 95 162 40 19 119 12 153 -13z m-3133 -89 c-7 -41
-21 -51 -44 -30 -9 8 -41 26 -71 40 -51 23 -53 25 -24 25 17 1 55 13 85 29
l54 27 3 -29 c2 -16 1 -44 -3 -62z m332 -20 c65 -67 140 -99 233 -99 56 0 87
6 123 22 26 12 47 19 47 16 0 -4 -19 -40 -41 -82 -123 -223 -284 -406 -490
-553 -88 -63 -327 -187 -368 -191 -23 -2 -26 3 -43 86 l-18 89 32 67 c29 61
37 69 83 89 75 33 117 72 156 144 31 58 34 70 34 153 1 83 3 94 33 145 18 30
35 64 38 75 4 16 78 62 133 83 3 1 24 -19 48 -44z m-1005 -131 c-55 -80 -55
-186 0 -265 l19 -28 -46 0 c-59 0 -104 19 -138 59 -48 57 -48 145 0 202 34 40
75 58 136 59 l48 0 -19 -27z m525 1 c52 -39 68 -71 68 -134 0 -95 -54 -151
-154 -158 l-59 -4 29 57 c20 40 29 73 29 105 0 32 -9 65 -29 105 l-29 57 59
-4 c38 -3 69 -11 86 -24z m2995 -1 c-10 -16 -24 -43 -30 -62 -23 -66 -11 -144
30 -203 l19 -28 -46 0 c-59 0 -104 19 -138 59 -48 57 -48 145 0 202 34 40 75
58 136 59 l48 0 -19 -27z m525 1 c52 -39 68 -71 68 -134 0 -95 -54 -151 -154
-158 l-59 -4 29 57 c20 40 29 73 29 105 0 32 -9 65 -29 105 l-29 57 59 -4 c38
-3 69 -11 86 -24z m-3792 -79 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0
41 39 80 80 80 19 0 40 -9 55 -25z m3520 0 c16 -15 25 -36 25 -55 0 -19 -9
-40 -25 -55 -15 -16 -36 -25 -55 -25 -19 0 -40 9 -55 25 -16 15 -25 36 -25 55
0 19 9 40 25 55 15 16 36 25 55 25 19 0 40 -9 55 -25z m-3646 -283 c57 -20
113 -14 176 17 l57 29 -4 -59 c-7 -100 -63 -154 -158 -154 -96 0 -151 54 -158
156 l-5 62 29 -20 c16 -11 44 -25 63 -31z m3520 0 c57 -20 113 -14 176 17 l57
29 -4 -59 c-7 -100 -63 -154 -158 -154 -96 0 -151 54 -158 156 l-5 62 29 -20
c16 -11 44 -25 63 -31z m-3618 -282 c5 0 9 -285 9 -748 0 -856 3 -820 -80
-902 -51 -52 -119 -80 -193 -80 l-40 0 5 38 c3 20 47 431 99 914 l94 876 48
-49 c26 -27 52 -49 58 -49z m4065 -837 c52 -485 94 -884 94 -887 0 -12 -78 -6
-129 10 -39 11 -67 29 -101 64 -83 82 -80 47 -80 899 l0 746 30 20 c17 11 43
36 58 55 l27 35 3 -30 c2 -16 46 -427 98 -912z m-3686 292 c55 -275 100 -508
100 -518 0 -49 -161 -157 -262 -176 l-48 -8 0 596 0 597 53 10 c28 5 53 7 54
4 2 -3 48 -230 103 -505z m3310 -106 l0 -597 -62 14 c-34 8 -84 27 -111 42
-61 33 -137 105 -137 129 0 10 45 245 101 523 l101 505 54 -9 54 -10 0 -597z
m-3440 -1074 l0 -325 -80 0 -80 0 0 165 c0 162 0 165 29 222 35 69 50 129 51
200 0 54 6 61 53 62 l27 1 0 -325z m3424 319 c12 -4 16 -20 16 -58 1 -70 16
-130 51 -199 29 -57 29 -60 29 -222 l0 -165 -80 0 -80 0 0 325 0 325 24 0 c13
0 31 -3 40 -6z m-2944 -884 l0 -80 -560 0 -560 0 0 80 0 80 560 0 560 0 0 -80z
m3520 0 l0 -80 -560 0 -560 0 0 80 0 80 560 0 560 0 0 -80z"
                />
              </g>
            </svg>
          </div>
        </Link>
        <Link offset={-25} to="maps" smooth={true} duration={1500}>
          <div
            className={
              target == "maps" ? "navigation-item scale-up" : "navigation-item"
            }
            onClick={(e) => setTarget("maps")}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <svg
              version={1.0}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M2430 5114 c-229 -26 -360 -54 -508 -109 -392 -147 -720 -416 -943
-775 -210 -339 -307 -778 -259 -1170 78 -631 528 -1501 1274 -2465 176 -228
403 -501 455 -548 69 -62 153 -62 222 0 52 47 279 320 455 548 671 867 1102
1655 1238 2267 35 157 46 259 46 423 -1 480 -193 939 -540 1285 -286 287 -623
460 -1020 525 -94 15 -352 27 -420 19z m247 -925 c373 -50 682 -318 783 -679
27 -95 37 -286 21 -390 -47 -296 -241 -556 -516 -690 -162 -79 -328 -109 -497
-90 -132 15 -199 34 -313 90 -275 134 -469 394 -516 690 -16 104 -6 295 21
390 125 446 566 741 1017 679z"
                />
              </g>
            </svg>
          </div>
        </Link>
        <Link offset={-25} to="protokol" smooth={true} duration={1500}>
          <div
            className={
              target == "protokol"
                ? "navigation-item scale-up"
                : "navigation-item"
            }
            onClick={(e) => setTarget("protokol")}
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512.000000 512.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M1800 4919 c-232 -60 -425 -219 -526 -434 -53 -113 -76 -213 -76
-335 0 -117 15 -203 53 -298 61 -154 86 -182 697 -794 542 -543 579 -578 612
-578 32 0 69 35 593 558 307 306 580 586 608 622 147 195 197 441 139 685 -20
82 -93 225 -152 299 -152 189 -376 296 -617 296 -207 -1 -383 -64 -522 -188
l-49 -44 -49 44 c-92 82 -222 146 -349 173 -98 21 -270 18 -362 -6z m349 -154
c98 -24 208 -86 299 -171 106 -98 118 -98 217 -6 140 130 259 182 430 189 128
6 210 -10 309 -58 277 -135 418 -447 336 -745 -43 -160 -42 -159 -636 -754
l-544 -545 -544 545 c-409 410 -551 559 -575 602 -180 322 -64 719 260 888 42
22 103 46 136 54 77 19 233 19 312 1z"
                />
                <path
                  d="M2345 4375 c-24 -23 -25 -29 -25 -160 l0 -135 -135 0 c-131 0 -137
-1 -160 -25 -25 -24 -25 -26 -25 -215 0 -189 0 -191 25 -215 23 -24 29 -25
160 -25 l135 0 0 -135 c0 -131 1 -137 25 -160 24 -25 26 -25 215 -25 189 0
191 0 215 25 24 23 25 29 25 160 l0 135 135 0 c131 0 137 1 160 25 25 24 25
26 25 215 0 189 0 191 -25 215 -23 24 -29 25 -160 25 l-135 0 0 135 c0 131 -1
137 -25 160 -24 25 -26 25 -215 25 -189 0 -191 0 -215 -25z m295 -270 c0 -131
1 -137 25 -160 23 -24 29 -25 160 -25 l135 0 0 -80 0 -80 -135 0 c-131 0 -137
-1 -160 -25 -24 -23 -25 -29 -25 -160 l0 -135 -80 0 -80 0 0 135 c0 131 -1
137 -25 160 -23 24 -29 25 -160 25 l-135 0 0 80 0 80 135 0 c131 0 137 1 160
25 24 23 25 29 25 160 l0 135 80 0 80 0 0 -135z"
                />
                <path
                  d="M559 3997 c-127 -48 -205 -149 -216 -281 -5 -58 -8 -63 -54 -104 -64
-57 -100 -133 -106 -220 -4 -62 10 -118 182 -756 130 -485 194 -705 213 -740
22 -39 102 -116 341 -331 211 -188 320 -293 334 -320 17 -33 22 -62 25 -162 4
-109 2 -123 -12 -123 -9 0 -28 -11 -41 -25 l-25 -24 0 -351 0 -351 25 -24 24
-25 591 0 591 0 24 25 25 24 0 351 0 351 -25 24 c-13 14 -31 25 -39 25 -13 0
-15 60 -18 443 -4 430 -4 444 -27 512 -48 147 -139 280 -246 363 -45 35 -720
436 -778 463 -21 9 -46 75 -201 522 -97 282 -186 534 -198 561 -50 108 -154
177 -278 183 -47 2 -89 -2 -111 -10z m171 -167 c21 -11 47 -32 58 -47 10 -16
91 -237 179 -493 89 -256 164 -472 168 -482 5 -13 -4 -19 -46 -32 -29 -8 -54
-14 -55 -13 -1 1 -55 164 -119 361 -64 197 -124 375 -135 395 -41 80 -147 156
-236 168 -45 6 -46 7 -40 37 13 66 83 126 148 126 21 0 56 -9 78 -20z m-160
-320 c21 -11 47 -32 58 -47 10 -16 77 -207 147 -425 l128 -397 -23 -52 c-19
-45 -22 -66 -18 -134 5 -94 38 -166 99 -219 54 -46 530 -316 557 -316 13 0 34
11 47 25 32 31 33 78 3 108 -13 12 -124 81 -248 151 -124 71 -236 139 -248
150 -40 35 -55 74 -50 131 8 94 75 152 167 143 38 -4 114 -44 431 -229 432
-252 482 -290 552 -425 65 -123 68 -150 68 -606 l0 -408 -399 0 -399 0 -4 133
c-6 155 -23 212 -90 294 -24 29 -149 145 -278 259 -305 268 -339 301 -360 349
-10 22 -98 337 -195 700 -188 699 -189 707 -147 764 51 69 128 89 202 51z
m1750 -2950 l0 -240 -480 0 -480 0 0 240 0 240 480 0 480 0 0 -240z"
                />
                <path
                  d="M4360 3994 c-60 -22 -123 -69 -156 -115 -30 -44 -49 -94 -254 -684
l-153 -440 -266 -155 c-414 -240 -497 -291 -552 -336 -103 -84 -183 -205 -230
-349 -23 -68 -23 -81 -27 -512 -3 -384 -5 -443 -18 -443 -8 0 -26 -11 -39 -25
l-25 -24 0 -351 0 -351 25 -24 24 -25 591 0 591 0 24 25 25 24 0 351 0 351
-25 24 c-13 14 -32 25 -41 25 -14 0 -16 14 -12 123 3 101 7 129 25 163 15 28
116 125 326 312 300 267 327 294 361 360 10 19 99 336 198 705 162 598 182
681 182 752 1 68 -3 88 -27 137 -16 33 -49 76 -76 100 -46 41 -49 46 -54 106
-10 114 -75 209 -179 263 -57 30 -175 36 -238 13z m180 -166 c42 -29 68 -65
76 -104 6 -30 5 -31 -40 -37 -93 -13 -194 -84 -235 -166 -11 -21 -72 -200
-136 -397 -64 -197 -118 -360 -119 -361 -1 -1 -26 5 -55 13 -42 13 -51 19 -46
32 4 10 79 224 166 477 88 253 168 473 178 490 40 69 148 96 211 53z m160
-320 c46 -32 71 -68 77 -114 4 -30 -35 -186 -167 -679 -94 -352 -178 -662
-187 -689 -21 -66 -49 -94 -366 -375 -159 -141 -286 -261 -305 -289 -53 -78
-72 -155 -72 -288 l0 -114 -400 0 -400 0 0 408 c0 456 3 483 67 606 69 133
121 173 554 425 419 245 436 252 513 216 98 -47 116 -188 34 -261 -12 -11
-124 -79 -248 -150 -124 -71 -235 -139 -247 -151 -31 -30 -30 -77 2 -108 13
-14 34 -25 47 -25 37 0 515 278 569 331 65 64 92 139 86 239 -2 44 -12 91 -22
113 l-19 37 124 383 c67 210 132 400 144 422 41 78 148 109 216 63z m-940
-2948 l0 -240 -480 0 -480 0 0 240 0 240 480 0 480 0 0 -240z"
                />
              </g>
            </svg>
          </div>
        </Link>
        {/* <Link offset={-25} to="gift" smooth={true} duration={1500}>
          <div
            className={
              target == "gift" ? "navigation-item scale-up" : "navigation-item"
            }
            onClick={(e) => setTarget("gift")}
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <svg
              version={1.0}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128.000000 128.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
              >
                <path
                  d="M203 1266 c-36 -16 -56 -43 -78 -105 -18 -51 -21 -88 -11 -118 7 -21
4 -22 -51 -25 l-58 -3 0 -85 c0 -69 3 -85 15 -85 12 0 16 15 18 68 l3 67 71 0
c60 0 211 -31 227 -46 2 -2 -16 -42 -40 -89 l-44 -85 -106 0 c-100 0 -107 1
-112 21 -9 33 -32 17 -32 -22 0 -33 1 -34 42 -37 l43 -3 2 -357 3 -357 545 0
545 0 0 70 c0 56 -3 70 -15 70 -11 0 -16 -14 -18 -52 l-3 -53 -195 0 -194 0 1
328 1 327 30 -65 c17 -36 42 -112 57 -169 14 -58 31 -106 38 -108 6 -2 30 23
53 56 22 34 43 61 46 61 3 0 32 -21 65 -47 79 -62 89 -53 65 59 -10 46 -29
116 -42 156 -13 40 -24 75 -24 77 0 3 22 5 50 5 l50 0 2 -262 c3 -226 5 -263
18 -263 13 0 15 37 18 262 l2 262 43 3 42 3 0 145 0 145 -58 3 c-55 3 -58 4
-51 25 18 54 -22 176 -69 211 -43 32 -83 25 -215 -38 l-122 -58 -120 0 -120 0
-118 55 c-139 66 -157 71 -199 53z m190 -91 c102 -48 117 -59 117 -80 l0 -24
-72 34 c-119 56 -207 65 -244 24 -27 -30 -4 -45 37 -24 42 22 98 11 204 -42
l75 -37 0 -47 0 -47 -102 27 c-216 59 -228 63 -249 89 -21 27 -20 35 12 118
21 53 49 76 84 69 11 -2 73 -29 138 -60z m671 54 c16 -8 32 -30 45 -63 32 -83
33 -91 12 -118 -21 -26 -33 -30 -248 -89 l-103 -27 0 48 0 49 75 36 c109 51
162 62 204 40 44 -22 66 -5 33 27 -40 41 -127 27 -300 -49 -10 -4 -13 1 -10
17 2 18 28 34 128 81 69 32 128 59 132 59 4 0 18 -5 32 -11z m-339 -224 l0
-110 -85 0 -85 0 -3 99 c-1 55 0 106 2 113 4 11 26 13 88 11 l83 -3 0 -110z
m515 -135 l0 -110 -107 0 -108 0 -44 85 c-24 47 -42 87 -40 89 17 16 157 45
222 45 l77 1 0 -110z m-780 34 c54 -16 99 -42 100 -57 0 -5 -13 -27 -29 -50
-55 -81 -110 -211 -142 -336 l-11 -45 -30 52 c-16 29 -37 52 -45 52 -8 0 -33
-14 -55 -31 -21 -17 -41 -29 -45 -26 -9 9 45 186 83 270 46 101 96 187 110
187 6 0 35 -7 64 -16z m467 -39 c17 -29 47 -89 67 -132 38 -84 92 -261 83
-270 -4 -3 -24 9 -45 26 -22 17 -47 31 -55 31 -8 0 -29 -23 -45 -52 l-30 -52
-11 45 c-32 125 -87 255 -142 336 -16 23 -29 45 -29 50 1 21 110 70 160 72 8
0 29 -24 47 -54z m-233 -55 c14 -22 26 -42 26 -45 0 -3 -36 -5 -80 -5 -44 0
-80 2 -80 5 0 3 12 23 26 45 20 30 33 40 54 40 21 0 34 -10 54 -40z m-464 -95
c0 -2 -11 -37 -24 -77 -13 -40 -32 -110 -42 -156 -24 -112 -14 -121 65 -59 33
26 62 47 65 47 3 0 24 -27 46 -61 23 -33 47 -58 53 -56 7 2 24 50 38 108 15
57 40 133 57 169 l30 65 1 -327 1 -328 -195 0 -195 0 0 340 0 340 50 0 c28 0
50 -2 50 -5z m490 -335 l0 -340 -80 0 -80 0 0 340 0 340 80 0 80 0 0 -340z"
                />
              </g>
            </svg>
          </div>
        </Link> */}
        <Link offset={-25} to="ucapan" smooth={true} duration={1500}>
          <div
            className={
              target == "ucapan"
                ? "navigation-item scale-up"
                : "navigation-item"
            }
            onClick={(e) => setTarget("ucapan")}
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 512 512"
              enableBackground="new 0 0 512 512"
              xmlSpace="preserve"
            >
              {" "}
              <image
                id="image0"
                x={0}
                y={0}
                href="data:image/png;base64,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"
              />
            </svg>
          </div>
        </Link>
      </div>
      <style jsx>{`
        .navigation-wrapper {
          position: fixed;
          bottom: 0;
          right: 0;
          left: 0;
          display: flex;
          z-index: 41;
          justify-content: center;
          margin: 0 auto 2rem auto;
          transition: transform 2s;
        }

        .navigation-item {
          width: 3rem;
          padding: 0.5rem;
          background-color: rgb(255, 187, 204);
          border-radius: 0.25rem;
          box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
            rgba(0, 0, 0, 0.23) 0px 6px 6px;
          margin: 0 0.5rem;
        }

        .scale-up {
          transform: scale(1.25, 1.25);
          border: 2px solid rgb(153, 21, 78);
        }
      `}</style>
    </div>
  );
}

export default Navigation;
