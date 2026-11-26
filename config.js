var SAT_LAYERS = [
  'base-live',
  'img-1999-09',
  'img-2003-10',
  'img-2003-12',
  'img-2005-09',
  'img-2006-09',
  'img-2009-09',
  'img-2010-06',
  'img-2011-06',
  'img-2013-07',
  'img-2015-06',
  'img-2017-04',
  'img-2018-05',
  'img-2019-06',
  'img-2020-04',
  'img-2022-03'
];

// Layer name for each screenshot, in order:
//   1999-09.jpg  ->  satAt('img-1999-09')
//   2003-10.jpg  ->  satAt('img-2003-10')
//   2003-12.jpg  ->  satAt('img-2003-12')
//   2005-09.jpg  ->  satAt('img-2005-09')
//   2006-09.jpg  ->  satAt('img-2006-09')
//   2009-09.jpg  ->  satAt('img-2009-09')
//   2010-06.jpg  ->  satAt('img-2010-06')
//   2011-06.jpg  ->  satAt('img-2011-06')
//   2013-07.jpg  ->  satAt('img-2013-07')
//   2015-06.jpg  ->  satAt('img-2015-06')
//   2017-04.jpg  ->  satAt('img-2017-04')
//   2018-05.jpg  ->  satAt('img-2018-05')
//   2019-06.jpg  ->  satAt('img-2019-06')
//   2020-04.jpg  ->  satAt('img-2020-04')
//   2022-03.jpg  ->  satAt('img-2022-03')
//   Esri live imagery only (no screenshot)  ->  satAt('base-live')

// Returns the onChapterEnter list that makes `layerName` the visible image.
// Older layers stay fully opaque underneath and newer ones are switched off,
// so scrolling forwards OR backwards always lands on the right picture
// with no gaps during the crossfade.
function satAt(layerName) {
  var current = SAT_LAYERS.indexOf(layerName);
  return SAT_LAYERS.map(function (name, i) {
    return { layer: name, opacity: i <= current ? 1 : 0, duration: 1500 };
  });
}

var zoomfactor = 1.29;

// One shared camera centre for EVERY chapter at the stadium, so the view never
// drifts between chapters (drifting exposes the edge of the Google screenshots).
// Ideal value: the middle of the screenshots, i.e. the average of the four corner
// coordinates of any "img-..." source in map/style.json.
// The centre values written inside those chapters below are ignored.
var STADIUM_CENTER = [-0.0662, 51.6026]; // [longitude, latitude]

// Nudge the shared centre, in metres. These two numbers re-centre every stadium
// chapter at once. North and east are positive; south and west are negative.
var NORTH_SHIFT_M = 160;
var EAST_SHIFT_M = 0;

// Chapters that are NOT at the stadium and keep their own `center`.
var OWN_CENTRE = ['olympic-stadium', 'wembley'];

var config = {

    style: 'map/style.json',
    showMarkers: false, // true shows a pin at the centre of each chapter
    markerColor: '#3FB1CE',
    inset: false, // if inset map is set to true, legend will be disabled.
    legend: false, // if legend is set to true, inset will be disabled.
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps. You will need to provide your own terrain tiles.
    useCustomLayers: false, //set true for enabling custom layers from sources.js
    bookmarks: false,
    chapterReturn: true,
    title: '',
    logo: 'images/title.svg',
    subtitle: 'Scroll through the 2 decades it took to replace White Hart Lane with the new Tottenham Hotspur Stadium.',
    byline: '<a href="https://instagram.com/abdullahprz" target="_blank" rel="noopener noreferrer">@abdullahprz</a> | For DH100 at Wilfrid Laurier University<br><br><a href="https://pervez.ca" target="_blank" rel="noopener noreferrer">pervez.ca</a>',
    footer: 'Satellite imagery: Google Earth (credits as displayed in Google Earth Pro) and Esri World Imagery (Esri, Maxar, Earthstar Geographics and the GIS User Community).<br> Created using the <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> template. 🇨🇦',
    chapters: [
        {
            id: 'sept-1999',
            alignment: 'left',
            title: 'Welcome to White Hart Lane, Daniel',
	        image: './images/levy.png',
            description: '<p>FEBRUARY 2001—White Hart Lane was the name of the stadium Tottenham Hotspur played in since 1899. In early 2001, ENIC, an investment group owned largely by “life-long” Spurs fan Daniel Levy and Joe Lewis, bought about a third of Tottenham Hotspur. Levy took charge as the executive chairman, while Joe Lewis opted not to get personally involved. Levy went to Cambridge University to study Economics and worked in property development, which will be very relevant for his work at Spurs.</p>',
            location: { center: [-0.0660, 51.6021], zoom: 12.5 * zoomfactor, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: satAt('img-1999-09'),
            onChapterExit: []
        },
        {
            id: 'oct-2003',
            alignment: 'right',
            title: 'Feeling Squeezed',
            image: './images/changes.png',
            description: '<p>White Hart Lane had a capacity of about 36 000, and almost no room to grow with buildings on all sides. Daniel Levy knew that the club needed a bigger stadium to bring in more revenue, considering other Premier League clubs had capacities of up to 68 124. ENIC demanded from the start that Tottenham Hotspur make it’s own money, and Levy felt strongly that the stadium would be the engine for financial survival and success.</p>',
            location: { center: [-0.0660, 51.6021], zoom: 12.3 * zoomfactor, pitch: 40, bearing: 25 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: satAt('img-2003-10'),
            onChapterExit: []
        },
        {
            id: 'dec-2003',
            alignment: 'left',
            title: 'The Land Purchases',
            description: '<p>DECEMBER 2003—A prerequisite for expanding White Hart Lane was land to build on. Levy got to work quickly, making his first purchase of neighbouring land in 2002. This was the first of 90 individual deals it took to assemble 20 acres of land. London is a packed city.</p>',
            location: { center: [-0.0650, 51.6025], zoom: 12.3 * zoomfactor, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: satAt('img-2003-12'),
            onChapterExit: []
        },
        {
            id: 'sept-2005',
            alignment: 'right',
            title: 'Local Council Support',
            image: './images/haringey.png',
            description: '<p>JULY 2006—Haringey Council agrees that White Hart Lane could use expansion and development. Having council support is a crucial part of this story, as Tottenham Hotspur had goals of completely redeveloping the community. The decision to move stadiums was always on the table, and the council\’s attitude towards expansion efforts effectively determine whether to stay or move.</p>',
            location: { center: [-0.0660, 51.6021], zoom: 12.3 * zoomfactor, pitch: 0, bearing: -20 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: satAt('img-2005-09'),
            onChapterExit: []
        },
        {
            id: 'sept-2006',
            alignment: 'left',
            title: 'The Northumb- erland Development Project.',
            description: '<p>OCTOBER 2008—Tottenham Hotspur formally names their development plan, a sixty-thousand seat stadium and significant redevelopment of the surrounding areas. On the map, you can watch purchased buildings north of White Hart Lane be demolished.</p>',
            location: { center: [-0.0662, 51.6026], zoom: 12.3 * zoomfactor, pitch: 35, bearing: 15 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: satAt('img-2006-09'),
            onChapterExit: []

        },
        {
            id: 'sept-2009',
            alignment: 'right',
            title: 'Demolitions continue',
            description: '<p>Watch more buildings disappear over the following years. Though the council is on board, some environmentalists raise concern over the development.</p>',
            location: { center: [-0.0663, 51.6031], zoom: 12.3 * zoomfactor, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: satAt('img-2009-09'),
            onChapterExit: []
        },
        {
            id: 'june-2010',
            alignment: 'left',
            title: 'Holdouts...',
            image: './images/archwaybefore.jpg',
            description: '<p>JUNE 2010—Land north of the stadium has been cleared to a significant extent, though a few businesses like Archway Sheet Metal Works hold out.</p>',
            location: { center: [-0.0662, 51.6026], zoom: 12.3 * zoomfactor, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: satAt('img-2010-06'),
            onChapterExit: []
        },
        {
            id: 'olympic-stadium',
            alignment: 'right',
            title: 'Stratford Hotspur ?',
	        image: './images/olympics.jpeg',
            description: '<p>OCTOBER 2010—The club makes a bid to take over the Olympic Stadium in Stratford, about five miles away, after the 2012 Games. It would mean leaving Tottenham. Levy brought with him a big plan, to redevelop the (just completed) Olympic Stadium into a proper football stadium with sixty-thousand seats. London was offended by the bid, desperate to keep the Olympic aspect of the stadium intact, to avoid the appearance of burning tax dollars on a stadium that Spurs would destroy immediately after. Rival club West Ham United also made a bid for the stadium, agreeing to keep the Olympic aspects of the stadium untouched. West Ham plays there to this day, though struggle significantly with the unsightly Olympic track, cold design, and poor seating.</p>',
            location: { center: [-0.0166, 51.5387], zoom: 12.3 * zoomfactor, pitch: 30, bearing: 20 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: satAt('base-live'),
            onChapterExit: []
        },
        {
            id: 'riots-2011',
            alignment: 'left',
            title: 'The Riots.',
        	image: './images/riots.png',
            description: '<p>AUGUST 2011—Police shoot and kill Mark Duggan, a Tottenham resident. Protests erupt on Tottenham High Road. Buildings along the road were burned, and the disorder spread over the following days to other parts of London and then all over England. The local government was devastated and immediately realized they could not afford Tottenham Hotspur moving away. Not only did the councils become much more supportive, they agreed to invest millions of pounds alongside the club to jointly rebuild the community. Tottenham Hotspur eventually dropped their bid to go to Stratford and focused all their attention on their home.</p>',
            location: { center: [-0.0680, 51.6028], zoom: 12.6 * zoomfactor, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: satAt('img-2011-06'),
            onChapterExit: []


        },
        {
            id: 'july-2013',
            alignment: 'right',
            title: 'Lilywhite House',
        	image: './images/lilywhite.jpg',
            description: '<p>Two years on, with the help of local councils, the stadium plan and a wider regeneration of the High Road were advancing. The local governments issued Compulsory Purchase Orders (CPOs) to force the sale of local land to the project. North of the stadium, a multi-use building called the Lilywhite House nears completion. It contains a Sainsbury\’s supermarket, a college, offices, a gym, and more.</p>',
            location: { center: [-0.0663, 51.6028], zoom: 12.3 * zoomfactor, pitch: 35, bearing: -20 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: satAt('img-2013-07'),
            onChapterExit: []

        },
        {
            id: 'june-2015',
            alignment: 'left',
            title: 'The Archway Mystery',
	        image: './images/archway.jpg',
            description: '<p>NOVEMBER 2014—Among those who refused to sell to Tottenham Hotspur is Archway Sheet Metal Works. Amidst a legal battle, a fire breaks out, destroying the building. Police declare the fire suspicious, though nobody is ever found responsible. All is set to begin construction on the new stadium.</p>',
            location: { center: [-0.0663, 51.6031], zoom: 12.3 * zoomfactor, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: satAt('img-2015-06'),
            onChapterExit: []

        },
        {
            id: 'april-2017',
            alignment: 'right',
            title: 'The Final Season.',
	        image: './images/goodbye.jpeg',
            description: '<p>MAY 2017—Spurs play their last match at White Hart Lane, with the new stadium rising beside it and inside it. It\’s a 2-1 win over Manchester United. COYS! Levy contacts the NFL for a major partnership.</p>',
            location: { center: [-0.0662, 51.6026], zoom: 12.3 * zoomfactor, pitch: 40, bearing: 20 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: satAt('img-2017-04'),
            onChapterExit: []

        },
        {
            id: 'wembley',
            alignment: 'left',
            title: 'A season away',
            description: '<p>While the new stadium was finished, Tottenham played their home matches at Wembley Stadium. It\'s not fun.</p>',
            location: { center: [-0.2796, 51.5560], zoom: 12.3 * zoomfactor, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: satAt('base-live'),
            onChapterExit: []
        },
        {
            id: 'may-2018',
            alignment: 'right',
            title: 'Almost there',
            image: './images/levyroof.jpeg',
            description: '<p>MAY 2018—The old ground had been demolished and the new stadium was nearly complete. That\'s Levy himself up there, watching his stadium finally materialize.</p>',
            location: { center: [-0.0663, 51.6028], zoom: 12.3 * zoomfactor, pitch: 45, bearing: 30 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: satAt('img-2018-05'),
            onChapterExit: []
        },
        {
            id: 'june-2019',
            alignment: 'left',
            title: 'Tottenham Hotspur Stadium.',
            description: '<p>APRIL 2019—The first match at the new stadium is played, a 2-0 win over Crystal Palace. Levy has led to project to an undoubted success, and Spurs are high off a Champions League final. The stadium cost £1.2 billion, and Levy managed to secure incredible loans at dirt cheap rates.</p>',
            location: { center: [-0.0663, 51.6031], zoom: 12.3 * zoomfactor, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: satAt('img-2019-06'),
            onChapterExit: []
        },
        {
            id: 'april-2020',
            alignment: 'right',
            title: 'COVID-19.',
            image: './images/closed.jpg',
            description: '<p>MARCH 2020—The Premier League suspends all play during the first COVID-19 lockdown. The new stadium stood empty only a year after opening. The club immediately realizes how expensive the stadium was, and ENIC becomes paranoid about keeping the stadium profitable.</p>',
            location: { center: [-0.0663, 51.6031], zoom: 12.3 * zoomfactor, pitch: 30, bearing: -25 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: satAt('img-2020-04'),
            onChapterExit: []
        },
        {
            id: 'march-2022',
            alignment: 'left',
            title: 'Lewis vs. Levy',
            image: './images/feud.jpeg',
            description: '<p>Levy has always been the smaller owner of ENIC, and once Joe Lewis leaves his stake to his kids, they seize control. Levy did his work getting the stadium built, and now the Lewis kids question his power as the sole executive chairman. Though little becomes public, Daniel Levy is removed from leadership at Spurs in a restructuring. He spends the next few years quietly pulling away from ENIC and Spurs, and has bid against the Lewis family on recent sporting investments. Though a bitter end, the Lewis kids are much more willing to invest in the team, bringing high profile signings and a new manager with a mandate to win.</p>',
            location: { center: [-0.0662, 51.6026], zoom: 12.3 * zoomfactor, pitch: 0, bearing: 0 },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: satAt('img-2022-03'),
            onChapterExit: []
        },
        {
            id: 'today',
            alignment: 'right',
            title: 'A new home ?',
            description: '<p> NOVEMBER 2026—Roberto de Zerbi, manager at Spurs, wins Premier League Manager of the Month. Spurs had a shaky few years, with a Europa League trophy in 2025 coinciding with a bottom table finish at the stadium. Big spendings over the summer have built a squad with immense potential; Tottenham Hotspur and the ownership are determined to turn this financial success into a sporting one, and if the club believes anything, it\'s that To Dare Is To Do.</p>',
            location: { center: [-0.0663, 51.6028], zoom: 12.8 * zoomfactor, pitch: 25, bearing: -25 },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: satAt('img-2022-03'),
            onChapterExit: []
        }
    ]
};

// Give every chapter except those listed in OWN_CENTRE the same shared centre:
// STADIUM_CENTER plus the north/east shift (111,320 m is about one degree of latitude;
// a degree of longitude is shorter by the cosine of the latitude).
config.chapters.forEach(function (chapter) {
    if (OWN_CENTRE.indexOf(chapter.id) === -1) {
        var lat = STADIUM_CENTER[1] + NORTH_SHIFT_M / 111320;
        var lng = STADIUM_CENTER[0] + EAST_SHIFT_M / (111320 * Math.cos(lat * Math.PI / 180));
        chapter.location.center = [lng, lat];
    }
});