
// Polling Place ->(address to box mapping)-> Box Number -> Results by candidate -> (name to party mapping) -> Results by party


// DAVEM: Do this offline and upadte the geojson with ballot box number as could be some ambiguity.
// Note that geojson boxes will be an area as may have >1 box
var ballotBoxToPollingPlace = {
    "Lauriston Halls":"159",
    "Lothian Chambers":"160",
    "Waverly Court":"161",
    "Novotel Edinburgh Centre":"162",
    "Novotel Edinburgh Centre":"163",
    "Braidwood Commuinty Centre":"164",
    "The Principal Edinburgh":"165",
    "The Principal Edinburgh":"166",
    "Café Camino":"167",
    "Café Camino":"168",
    "Walpole Hall":"169",
    "Tollcross Primary School":"170",
    "Tollcross Primary School":"171",
    "Apex Haymarket Hotel":"172"
}

var resultsByBox = {
    "159": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [127, 139, 29, 17, 6, 1]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [70, 71, 74, 37, 23, 1]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [15, 39, 78, 64, 16, 6]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [160, 69, 37, 20, 3, 8]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [41, 19, 10, 6, 11, 71]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [2, 11, 23, 24, 50, 13]
            }]
    },
    "160": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [159, 180, 51, 22, 6, 1]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [72, 73, 117, 65, 26, 8]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [31, 5610395, 24, 3]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [187, 108, 40, 22, 14, 10]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [62, 17, 18, 16, 18, 95]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [4, 10, 33, 28, 70, 27]
            }]
    },
    "161": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [58, 109, 24, 10, 6, 2]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [46, 45, 55, 26, 15, 1]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [12, 42, 58, 35, 13, 2]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [110, 30, 22, 11, 7, 14]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [64, 10, 8, 8, 13, 41]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [2, 8, 19, 24, 28, 16]
            }]
    },
    "162": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [151, 103, 35, 13, 8, 0]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [68, 73, 97, 35, 12, 2]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [23, 56, 82, 61, 15, 4]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [101, 83, 29, 28, 9, 12]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [42, 14, 15, 11, 23, 57]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [1, 8, 23, 22, 47, 26]
            }]
    },
    "163": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [134, 125, 36, 16, 5, 3]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [61, 85, 95, 25, 14, 1]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [28, 47, 76, 94, 13, 2]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [101, 65, 56, 23, 8, 6]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [51, 11, 8, 12, 16, 74]
            },
            {
                "Candidate": "",
                "Party": "Other",
                "Votes": [0, 5, 14, 28, 63, 16]
            }]
    },
    "164": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [48, 53, 23, 7, 2, 2]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [43, 31, 31, 23, 9, 2]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [2, 20, 30, 32, 14, 3]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [85, 41, 8, 5, 4, 3]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [10, 6, 10, 2, 16, 42]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [4, 4, 24, 15, 27, 12]
            }]
    },
    "165": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [69, 136, 67, 21, 13, 0]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [46, 107, 119, 46, 21, 3]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [59, 169, 103, 62, 7, 0]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [112, 41, 23, 20, 4, 29]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [321, 31, 16, 13, 18, 48]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [3, 11, 31, 28, 43, 15]
            }]
    },
    "166": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [87, 133, 59, 29, 20, 1]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [52, 74, 115, 54, 25, 2]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [44, 149, 107, 47, 11, 0]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [127, 56, 32, 17, 10, 32]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [266, 27, 18, 4, 18, 52]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [3, 16, 21, 36, 40, 25]
            }]
    },
    "167": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [104, 148, 44, 23, 11, 1]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [73, 78, 99, 44, 19, 5]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [41, 114, 89, 69, 7, 5]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [123, 62, 36, 19, 8, 22]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [194, 23, 17, 7, 23, 48]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [3, 6, 30, 28, 45, 19]
            }]
    },
    "168": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [116, 134, 49, 21, 5, 1]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [59, 70, 77, 49, 22, 2]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [34, 87, 96, 49, 13, 4]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [111, 63, 39, 24, 11, 14]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [118, 15, 16, 13, 17, 50]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [0, 6, 25, 21, 40, 28]
            }]
    },
    "169": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [47, 84, 43, 29, 16, 1]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [51, 59, 83, 25, 13, 1]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [40, 114, 72, 29, 4, 0]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [66, 29, 23, 11, 11, 28]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [199, 33, 16, 10, 9, 23]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [2, 10, 16, 18, 32, 23]
            }]
    },
    "170": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [144, 116, 48, 22, 7, 2]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [80, 77, 104, 39, 19, 5]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [32, 86, 82, 72, 6, 3]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [123, 79, 38, 25, 11, 16]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [87, 26, 22, 9, 22, 59]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [1, 12, 23, 22, 53, 16]
            }]
    },
    "171": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [172, 127, 38, 17, 7, 0]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [57, 85, 104, 44, 19, 4]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [15, 68, 87, 78, 16, 2]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [138, 100, 50, 22, 13, 10]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [58, 10, 14, 16, 16, 72]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [3, 4, 29, 20, 58, 27]
            }]
    },
    "172": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [92, 160, 86, 48, 19, 3]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [78, 101, 146, 67, 26, 5]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [107, 212, 107, 61, 14, 3]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [152, 54, 44, 27, 17, 44]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [280, 54, 29, 17, 24, 65]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [3, 10, 34, 33, 74, 32]
            }]
    },
    "65": {
        "Results": [
            {
                "Candidate": "Nigel BAGSHAW",
                "Party": "Green",
                "Votes": [64, 94, 47, 20, 6, 3, 6, 1]
            },
            {
                "Candidate": "Gavin BARRIE",
                "Party": "SNP",
                "Votes": [100, 53, 19, 12, 4, 3, 3, 13]
            },
            {
                "Candidate": "James DALGLEISH",
                "Party": "Labour",
                "Votes": [69, 37, 48, 39, 12, 7, 2, 2]
            },
            {
                "Candidate": "Tom LAIRD",
                "Party": "Other",
                "Votes": [0, 3, 10, 14, 23, 25, 5, 5]
            },
            {
                "Candidate": "Max MITCHELL",
                "Party": "Tory",
                "Votes": [40, 110, 12, 10, 7, 10, 23, 8]
            },
            {
                "Candidate": "Hal OSLER",
                "Party": "LibDem",
                "Votes": [57, 47, 75, 26, 16, 4, 4, 2]
            },
            {
                "Candidate": "Iain WHYTE",
                "Party": "Tory",
                "Votes": [114, 43, 18, 12, 4, 4, 12, 24]
            },
            {
                "Candidate": "Tina WOOLNOUGH",
                "Party": "Other",
                "Votes": [8, 21, 34, 30, 29, 12, 8, 2]
            }
        ]
    },
    "66": {
        "Results": [{"Candidates": "Nigel BAGSHAW", "Party": "Green", "Votes": [34, 69, 43, 7, 7, 6, 4, 0]},
            {"Candidates": "Gavin BARRIE", "Party": "SNP", "Votes": [97, 33, 15, 4, 1, 2, 2, 7]},
            {"Candidates": "James DALGLEISH", "Party": "Labour", "Votes": [47, 34, 30, 32, 13, 6, 1, 0]},
            {"Candidates": "Tom LAIRD", "Party": "Other", "Votes": [1, 3, 5, 9, 15, 17, 5, 4]},
            {"Candidates": "Max MITCHELL", "Party": "Tory", "Votes": [24, 78, 13, 5, 7, 5, 20, 6]},
            {"Candidates": "Hal OSLER", "Party": "LibDem", "Votes": [34, 34, 56, 25, 12, 5, 1, 0]},
            {"Candidates": "Iain  WHYTE", "Party": "Tory", "Votes": [82, 34, 10, 5, 2, 0, 13, 21]},
            {"Candidates": "Tina WOOLNOUGH", "Party": "Other", "Votes": [5, 11, 34, 25, 11, 14, 2, 8]}]
    },
    "67": {
        "Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [115,140,66,26,14,12,9,2] },
            { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [95,58,37,22,7,4,7,27] },
            { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [100,59,70,60,24,13,8,1] },
            { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [0,6,14,18,32,34,11,12] },
            { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [137,51,25,12,4,16,34,14] },
            { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [98,84,100,63,27,3,1,0] },
            { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [27,124,40,16,7,5,26,29] },
            { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [9,15,66,48,39,24,2,6]}]
    },
    "68": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [114,127,57,30,5,3,5,0] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [115,60,26,21,3,3,6,11] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [78,60,84,43,15,13,1,3] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [1,4,15,21,27,20,11,4] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [150,53,20,7,4,10,17,19] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [79,77,117,52,19,4,1,0] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [32,140,29,10,5,7,26,18] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [7,13,41,39,24,23,2,7]}]},
    "69": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [81,117,58,26,10,4,6,1] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [122,40,34,18,7,5,4,16] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [51,53,74,46,20,16,3,2] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [6,2,21,20,19,17,7,7] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [190,61,27,10,11,7,23,8] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [86,78,90,45,20,7,1,1] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [42,178,35,8,7,10,10,20] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [17,26,75,48,15,9,10,4] }]},
    "70": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [106,164,51,19,7,4,8,1] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [121,51,38,21,4,5,5,10] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [80,59,103,42,16,9,2,0] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [4,5,15,12,30,32,8,4] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [136,52,23,13,5,9,39,9] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [92,63,97,59,12,6,1,0] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [26,125,30,14,8,7,15,41] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [4,20,31,36,39,20,3,11] }]},
    "71": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [143,160,56,22,3,3,4,1] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [152,77,34,19,6,7,7,11] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [80,51,110,52,22,14,2,0] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [1,4,11,20,22,28,7,10] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [106,46,18,12,11,8,31,14] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [70,77,121,66,22,3,1,1] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [31,105,20,12,7,7,18,33] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [6,21,40,37,26,16,8,6] }]},
    "72": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [120,153,52,20,8,0,8,2] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [125,54,47,17,11,4,2,12] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [75,68,76,45,15,17,4,0] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [1,12,23,16,21,33,7,9] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [114,47,15,11,6,9,45,11] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [94,69,95,44,25,8,1,1] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [25,100,31,14,9,8,13,43] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [4,12,36,48,39,18,8,2] }]},
    "73": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [92,91,27,10,6,2,3,1] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [85,50,19,17,1,4,0,5] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [38,40,50,38,10,13,0,0] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [2,0,5,13,19,14,2,6] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [52,16,9,4,8,7,27,6] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [39,49,75,40,8,3,1,0] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [10,47,12,6,2,8,11,22] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [1,4,30,11,29,9,5,7] }]},
    "74": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [68,73,39,14,6,2,5,1] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [65,36,18,12,3,4,5,10] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [31,33,39,36,14,16,0,0] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [2,2,10,7,12,15,10,8] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [130,45,10,6,4,4,19,8] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [55,47,73,37,13,0,3,1] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [34,119,24,10,6,6,7,15] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [11,14,41,28,16,11,1,4] }]},
    "75": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [94,115,67,30,8,4,5,2] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [115,59,38,15,10,7,3,12] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [92,66,70,49,17,13,2,2] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [1,1,9,21,19,23,11,12] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [154,70,24,5,8,14,29,10] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [106,72,128,33,17,2,2,1] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [46,153,31,13,11,10,16,22] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [9,18,41,46,27,16,7,8] }]},
    "76": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [91,129,59,17,7,4,5,0] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [116,45,33,24,12,2,3,15] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [98,44,72,54,11,14,2,0] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [1,7,10,22,15,26,13,8] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [161,71,18,9,6,9,35,9] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [81,85,122,39,20,3,0,0] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [63,152,22,8,8,16,10,31] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [3,19,59,32,30,14,7,10] }]},
    "77": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [62,100,55,22,11,2,9,1] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [87,43,27,13,4,5,1,14] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [39,31,72,43,24,11,5,2] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [0,3,10,15,18,20,10,7] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [32,176,44,13,4,18,19,6] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [112,81,115,39,15,3,2,0] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [202,77,24,12,4,5,15,17] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [40,28,63,41,20,10,5,10] }]},
    "78": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [44,99,42,24,11,2,1,2] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [98,26,28,13,4,3,7,5] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [34,36,54,33,18,8,2,1] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [0,4,13,16,9,14,3,4] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [48,169,29,8,7,4,15,2] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [99,54,94,38,9,7,1,0] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [187,73,20,11,3,1,3,13] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [33,39,72,27,16,10,2,3] }]},
    "79": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [5,50,33,18,6,2,3,3] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [64,14,8,5,2,2,2,8] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [30,23,28,24,14,5,5,2] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [0,4,9,3,10,11,4,4] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [23,116,23,8,1,4,10,4] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [95,44,62,16,6,2,0,0] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [118,40,16,5,5,3,4,9] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [7,17,43,31,10,7,4,2] }]},
    "80": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [19,69,49,32,13,5,6,0] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [64,20,13,9,4,2,3,21] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [19,23,51,43,14,12,6,1] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [1,2,7,13,17,15,8,8] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [54,157,60,25,13,9,17,3] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [193,63,87,31,10,4,0,0] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [150,110,43,12,4,8,9,16] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [36,59,72,48,18,6,2,1] }]},
    "81": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [18,55,37,21,7,8,20,1] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [58,22,11,8,4,3,5,26] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [16,28,37,35,19,13,3,1] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [1,1,6,16,17,21,8,6] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [50,163,50,26,6,9,11,7] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [169,54,101,22,9,4,2,1] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [157,104,47,10,9,2,9,12] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [35,45,60,43,17,7,6,5] }]},
    "82": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [22,63,29,5,3,3,1,0] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [143,24,10,7,0,3,1,4] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [103,49,31,10,10,4,0,0] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [3,3,15,18,9,2,3,0] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [30,40,9,4,3,7,14,6] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [25,22,34,11,9,8,2,1] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [37,26,7,7,4,2,9,14] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [2,13,23,10,7,5,0,2] }]},
    "126": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [62,61,28,9,6,0] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [43,7,6,3,10,35] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [68,43,18,7,4,10] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [13,37,45,24,8,0] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [2,7,18,19,20,7] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [33,35,36,24,15,1] }]},
    "127": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [42,83,30,10,6,0] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [135,17,21,6,7,21] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [84,25,15,2,6,11] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [26,67,44,22,6,3] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [2,8,32,16,14,5] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [52,54,48,15,10,5] }]},
    "128": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [91,114,51,13,7,0] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [98,23,21,4,9,54] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [138,59,21,9,8,22] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [27,54,60,45,16,2] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [0,22,43,33,42,11] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [85,77,59,23,26,5] }]},
    "129": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [103,133,42,17,9,0] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [97,23,25,17,10,57] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [164,59,25,6,6,22] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [16,63,80,50,24,0] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [2,16,43,32,38,22] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [111,80,66,19,36,8] }]},
    "130": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [127,158,44,7,6,2] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [92,22,15,10,15,69] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [167,76,37,16,5,17] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [19,57,95,45,21,3] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [9,17,47,47,43,12] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [88,87,74,32,30,2] }]},
    "131": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [342,128,41,11,11,0] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [93,36,32,10,18,81] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [84,141,71,28,12,22] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [23,107,117,75,19,5] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [2,16,44,53,74,16] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [96,131,120,47,23,7] }]},
    "132": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [234,115,34,11,6,0] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [55,20,14,12,15,102] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [93,88,35,26,22,21] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [24,73,107,68,22,2] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [6,26,41,39,76,13] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [56,98,108,49,23,1] }]},
    "133": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [247,104,33,9,8,1] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [66,26,19,7,10,99] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [75,108,43,21,14,21] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [18,76,98,72,25,0] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [4,18,49,44,59,9] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [53,90,100,34,32,1] }]},
    "134": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [181,140,23,13,9,0] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [43,21,14,9,15,77] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [125,91,39,18,5,19] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [25,54,96,59,21,1] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [2,10,41,38,63,12] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [57,70,98,37,22,4] }]},
    "135": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [147,125,42,7,4,0] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [38,19,18,7,10,75] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [130,86,26,15,7,12] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [16,58,81,46,23,3] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [8,9,40,36,45,8] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [50,56,85,39,27,0] }]},
    "136": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [173,149,53,10,11,1] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [265,60,29,14,15,44] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [107,65,31,14,7,29] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [36,120,117,46,12,0] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [3,13,42,44,36,14] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [81,100,81,34,30,4] }]},
    "137": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [214,160,55,29,21,1] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [402,86,32,14,7,35] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [112,75,41,15,17,47] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [34,165,144,52,16,1] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [0,22,56,38,42,18] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [95,130,115,35,27,6] }]},
    "138": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [79,142,67,35,27,5] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [380,31,20,11,9,42] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [102,43,23,8,15,54] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [36,183,114,47,18,1] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [2,18,51,56,46,17] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [62,104,110,39,31,3] }]},
}

// For each of the ballot boxes calculate the total number of votes for each round and attach the totals to the object
function calculateBallotBoxCandidateTotalVotesByRound() {
    for (var box in resultsByBox) {
        if (resultsByBox.hasOwnProperty(box)) {
            var boxDetails = resultsByBox[box.toString()];
            var CandidateTotalVotesByRound = [];
            for (var j = 0; j < boxDetails.Results.length; j++) {
                var result = boxDetails.Results[j];
                for (var i = 0; i < result.Votes.length; i++) {
                    if (CandidateTotalVotesByRound[i] === undefined) {
                        CandidateTotalVotesByRound[i] = 0;
                    }
                    CandidateTotalVotesByRound[i] += result.Votes[i];
                }
            }
            boxDetails["CandidateTotalVotesByRound"] = CandidateTotalVotesByRound;
        }
    }
}
calculateBallotBoxCandidateTotalVotesByRound();

function calculateBallotBoxPercentageByRound() {

    for (var box in resultsByBox) {
        if (resultsByBox.hasOwnProperty(box)) {
            var boxDetails = resultsByBox[box.toString()];
            boxDetails["PartyVotesAsPercentage"] = {};
            for (var j = 0; j < boxDetails.Results.length; j++) {
                var result = boxDetails.Results[j];
                result["CandidateVotesAsPercentage"] = [];
                if (boxDetails["PartyVotesAsPercentage"][result.Party.toString()] === undefined) {
                    boxDetails["PartyVotesAsPercentage"][result.Party.toString()] = [];
                }
                for (var i = 0; i < result.Votes.length; i++) {
                    if (result.CandidateVotesAsPercentage[i] === undefined) {
                        result.CandidateVotesAsPercentage[i] = 0;
                    }
                    result.CandidateVotesAsPercentage[i] = (result.Votes[i] / boxDetails.CandidateTotalVotesByRound[i]) * 100;
                    if (boxDetails["PartyVotesAsPercentage"][result.Party.toString()][i] === undefined) {
                        boxDetails["PartyVotesAsPercentage"][result.Party.toString()][i] = 0;
                    }
                    boxDetails["PartyVotesAsPercentage"][result.Party.toString()][i] += result.CandidateVotesAsPercentage[i];
                }
            }
        }
    }
}
calculateBallotBoxPercentageByRound();
