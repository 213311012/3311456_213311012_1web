'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "7a680c0bf2b28b289b32a48fb00d64ed",
"assets/AssetManifest.json": "0d38bc1ee27142b61102b7f1574683e5",
"assets/assets/images/2.0x/facebook-logo.png": "804cf2a905b2c7460adcaadb3dbfe9ae",
"assets/assets/images/2.0x/google-logo.png": "28b51fa69f1f0cb8a8f7a4bdd8e173c9",
"assets/assets/images/3.0x/facebook-logo.png": "d23205c8421608e83f9f7c420f3e2e89",
"assets/assets/images/3.0x/google-logo.png": "a6b32c1f07fa2fc81ce254986b971691",
"assets/assets/images/App/notfound.png": "7a75ee93688def23cd8d7b9e2353bfec",
"assets/assets/images/Background/logomuz1.png": "3210be4b18cf299d35a4eabaf1793d8c",
"assets/assets/images/facebook-logo.png": "93ee119598a19421b156937f50e9598b",
"assets/assets/images/google-logo.png": "2c67a2d05993442e19041b7baa43868c",
"assets/assets/images/planes.png": "9067b36d5d8256fa1a99c9eafe6e050b",
"assets/assets/images/trvy.jpg": "5486e1cc51e6f6491baee2fdd921efe5",
"assets/assets/images/Yurtdisi/cambridge.jpg": "26e25a5544c6e7c88de699886658aba7",
"assets/assets/images/Yurtdisi/londra.jpg": "3471df56d1f59bbcd17a753143c256ab",
"assets/assets/images/Yurtdisi/los%2520angeles.jpg": "25e1ea372aec171af6034861489ca749",
"assets/assets/images/Yurtdisi/Mekan/Cambridge/Cambridge%2520Science%2520Centre.jpg": "d9ff4bcaa08f4520a6ce5d8636d6afd7",
"assets/assets/images/Yurtdisi/Mekan/Cambridge/kings%2520college.jpg": "f5f1771d528b2adfe2be4032388f4d3e",
"assets/assets/images/Yurtdisi/Mekan/Cambridge/the%2520backs.jpg": "36e0f87b9196ce4de2debaeb0860bb08",
"assets/assets/images/Yurtdisi/Mekan/Londra/big%2520ben.jpg": "4f468a7faa5a9f00fed7165f4f10f197",
"assets/assets/images/Yurtdisi/Mekan/Londra/buckingham%2520saray%25C4%25B1.jpg": "18f757c93b8b255e21cc85a55e8d23f0",
"assets/assets/images/Yurtdisi/Mekan/Londra/westminster%2520saray%25C4%25B1.jpg": "5bcad289a8d0e62571a53bc95d2ea20d",
"assets/assets/images/Yurtdisi/Mekan/Los%2520Angeles/hollywood%2520bulvar%25C4%25B1.jpg": "d0708404c84de0e7f0b1aac519dc76e4",
"assets/assets/images/Yurtdisi/Mekan/Los%2520Angeles/santa%2520monica.jpg": "a6b545279a905b9fb139d2c964477f28",
"assets/assets/images/Yurtdisi/Mekan/Los%2520Angeles/universal%2520studios.jpg": "e44eac6721f2e69a2152cdf36c844229",
"assets/assets/images/Yurtdisi/Mekan/Toronto/china%2520town.jpg": "ed0d79c62a8834f18dfa874a5742b72f",
"assets/assets/images/Yurtdisi/Mekan/Toronto/cn%2520tower.jpg": "9a89deac259ae4c3f6e299c2145c660c",
"assets/assets/images/Yurtdisi/Mekan/Toronto/royal%2520ontario%2520m%25C3%25BCzesi.jpg": "9ad625ef3bb44cf18b5b73df47203853",
"assets/assets/images/Yurtdisi/toronto.jpg": "48daeb9117a83067df36c71593c87ed8",
"assets/assets/images/Yurtdisi/Yemek/Cambridge/cremebrulee.jpg": "01dc6cbf59bb8a9897f8342c05df9465",
"assets/assets/images/Yurtdisi/Yemek/Londra/fishandchips.jpg": "5c69573440e67531ccb000f8bcb9d81e",
"assets/assets/images/Yurtdisi/Yemek/Los%2520Angeles/tacos.jpg": "1134b0ec5c4a8721fe694d1d29349bdf",
"assets/assets/images/Yurtdisi/Yemek/Toronto/peameal.jpg": "c111767944181c4095bae074b73136ed",
"assets/assets/images/Yurtici/ankara.jpg": "3275832d3d1762b83485d98c1721ae88",
"assets/assets/images/Yurtici/antalya.jpg": "a23731f7b78e214527624c412a9c6e7b",
"assets/assets/images/Yurtici/ayd%25C4%25B1n.jpg": "9248a3e3b529673fd114762ebf7d7d26",
"assets/assets/images/Yurtici/bolu.jpg": "3f88d7ac8300ce2c5e32c0a7c94a6b50",
"assets/assets/images/Yurtici/bursa.jpg": "1af110baaecfe3a91723ce63f154639b",
"assets/assets/images/Yurtici/denizli.jpg": "bb68a355c0c522307e50bb45bb53ede8",
"assets/assets/images/Yurtici/edirne.jpg": "dd38b48aad498703bb645826c646891a",
"assets/assets/images/Yurtici/eski%25C5%259Fehir.jpg": "457c4e7609c20acaee49c239602ddafa",
"assets/assets/images/Yurtici/Mekan/Ankara/an%25C4%25B1tkabir.jpg": "c7a0f89672de65536de19204600a48ef",
"assets/assets/images/Yurtici/Mekan/Ankara/ankara%2520kalesi.jpg": "8f096469a7b42592388ee2717326b45f",
"assets/assets/images/Yurtici/Mekan/Ankara/hamam%25C3%25B6n%25C3%25BC.jpg": "e55dfc563b8f5d39d236a356e74d1325",
"assets/assets/images/Yurtici/Mekan/Antalya/d%25C3%25BCden%2520%25C5%259Felalesi.jpg": "487a88cd16aedea7ffb004da098906a0",
"assets/assets/images/Yurtici/Mekan/Antalya/kalei%25C3%25A7i.jpg": "df44cac502ccefa9e6208f108bcd7f71",
"assets/assets/images/Yurtici/Mekan/Antalya/theimussa.jpg": "63f716734d9bf00e9c801480f2ab76e2",
"assets/assets/images/Yurtici/Mekan/Ayd%25C4%25B1n/nysa%2520antik%2520kenti.jpg": "ba6fc316d0a8e0343c643d1c7d99ba5e",
"assets/assets/images/Yurtici/Mekan/Ayd%25C4%25B1n/priene.jpg": "0e3d6bdee85712c84ced9e42fbf18b6e",
"assets/assets/images/Yurtici/Mekan/Ayd%25C4%25B1n/tralleis.jpg": "bbca87771aef64eecc3b30c7b3f9535c",
"assets/assets/images/Yurtici/Mekan/Bolu/abant%2520g%25C3%25B6l%25C3%25BC.jpg": "8804bb13824486ef8847b42886de3a51",
"assets/assets/images/Yurtici/Mekan/Bolu/akkaya%2520travertenleri.jpg": "f99588d5697c6ae1be599299776b1b7d",
"assets/assets/images/Yurtici/Mekan/Bolu/kartalkaya%2520kayak%2520merkezi.jpg": "6702c39454fa2db5376e6d1dffefa9ca",
"assets/assets/images/Yurtici/Mekan/Bursa/Koza%2520Han.jpg": "1c7dabf92f0e5e4567ce11c8a5a590e0",
"assets/assets/images/Yurtici/Mekan/Bursa/Muradiye%2520k%25C3%25BClliyesi.jpg": "936a8d9c11143e5893045f24e2f16c2a",
"assets/assets/images/Yurtici/Mekan/Bursa/Ulu%2520camii.jpg": "b629b132f07990a224d81790158c5172",
"assets/assets/images/Yurtici/Mekan/Denizli/laodicea.jpg": "71b91eb81fc81f18fae66ea5c0899b61",
"assets/assets/images/Yurtici/Mekan/Denizli/ornaz%2520vadisi.jpg": "b3997e08c18c35abc473ae57ea420dc6",
"assets/assets/images/Yurtici/Mekan/Denizli/pamukkale%2520travertenleri.jpg": "1aad739104f25a9645e3d2d6046043fb",
"assets/assets/images/Yurtici/Mekan/Edirne/erikli%2520plaj%25C4%25B1.jpg": "ab22b8e21ec2e06e350e67d3fca8f31f",
"assets/assets/images/Yurtici/Mekan/Edirne/h%25C4%25B1d%25C4%25B1rl%25C4%25B1k%2520tabyas%25C4%25B1.jpg": "372f9e455e85c7c4d7702edbcc937618",
"assets/assets/images/Yurtici/Mekan/Edirne/karaa%25C4%259Fa%25C3%25A7%2520tren%2520gar%25C4%25B1.jpg": "06c72b9fe922ac3eb000afeba293436b",
"assets/assets/images/Yurtici/Mekan/Eski%25C5%259Fehir/Odunpazar%25C4%25B1.jpg": "b351c113e2601ed8d906f26ab648e399",
"assets/assets/images/Yurtici/Mekan/Eski%25C5%259Fehir/porsuk%2520%25C3%25A7ay%25C4%25B1.jpg": "7506d887a9868128422a4cba437b11cf",
"assets/assets/images/Yurtici/Mekan/Eski%25C5%259Fehir/Sazova%2520park%25C4%25B1.jpg": "ef105cdc9a538b25a94d375e1746ca60",
"assets/assets/images/Yurtici/Mekan/Mu%25C4%259Fla/%25C3%25B6l%25C3%25BCdeniz.jpg": "e8ec9f6d68ee8eae8827f18e7301dda4",
"assets/assets/images/Yurtici/Mekan/Mu%25C4%259Fla/dalaman%2520%25C3%25A7ay%25C4%25B1.jpg": "2450f70453392ed3198bbc0d67967cfd",
"assets/assets/images/Yurtici/Mekan/Mu%25C4%259Fla/Sakl%25C4%25B1kent%2520kanyonu.jpg": "308c700d298acd2e4a31bc7ab038cfb2",
"assets/assets/images/Yurtici/mu%25C4%259Fla.jpg": "3eeeb438663ef645af923371d8e4a147",
"assets/assets/images/Yurtici/trabzon.jpg": "958ceaf7b998153504d4787d126c9179",
"assets/assets/images/Yurtici/Yemek/Ankara/ankaratava.jpg": "d9276c6ed53f92c9ece7c49f2b8b2c30",
"assets/assets/images/Yurtici/Yemek/Ankara/beypazariguveci.jpg": "4550c7d2adea3abfb082fcee0baab846",
"assets/assets/images/Yurtici/Yemek/Ankara/efeleksarmasi.jpg": "771c566771b4274753e28ccfea763f72",
"assets/assets/images/Yurtici/Yemek/Antalya/giritkebabi.jpg": "9ac088e3c4f5adfc3d48710a439e924d",
"assets/assets/images/Yurtici/Yemek/Antalya/huluklucorba.jpg": "eb4a8045f01423a5de2291cb35bdb522",
"assets/assets/images/Yurtici/Yemek/Antalya/labadolmasi.jpg": "6bc4972f2a5211f83010c33b3f9a4b76",
"assets/assets/images/Yurtici/Yemek/Ayd%25C4%25B1n/cinekoftesi.jpg": "9e3001d72d7a59ee8c234d8e7c2b302a",
"assets/assets/images/Yurtici/Yemek/Ayd%25C4%25B1n/keskek.jpg": "e5de8cd4abef271dce662b129b28ba52",
"assets/assets/images/Yurtici/Yemek/Ayd%25C4%25B1n/pasaboregi.jpg": "7ea1c14e00c33450e0bd3e2bfc567d22",
"assets/assets/images/Yurtici/Yemek/Bolu/abantkebabi.jpg": "314b555a964ed0952c3bd5e2af0e02f8",
"assets/assets/images/Yurtici/Yemek/Bolu/kaldirikdolmasi.jpg": "795968bfaca72e4fab08a3654f62931e",
"assets/assets/images/Yurtici/Yemek/Bolu/mengenpilavi.jpg": "00a984df06f747ddb49a4434ca904b11",
"assets/assets/images/Yurtici/Yemek/Bursa/iskenderkebabi.jpg": "afc2b0870b01acecf7b7b4de3383f7df",
"assets/assets/images/Yurtici/Yemek/Bursa/kemalpasatatlisi.jpg": "c40670092d0e69da2eaa925c74c01528",
"assets/assets/images/Yurtici/Yemek/Bursa/pidelikofte.jpg": "acb758d9f2ff712a33a869d350303a68",
"assets/assets/images/Yurtici/Yemek/Denizli/bibertatari.jpg": "bfb34960bc5f98498c8a277ba6271f62",
"assets/assets/images/Yurtici/Yemek/Denizli/borulceboregi.jpg": "b2fe046353d56d241432da3064053479",
"assets/assets/images/Yurtici/Yemek/Denizli/yenboregi.jpg": "d46dc2e6c4c93659bcb615bef78f3189",
"assets/assets/images/Yurtici/Yemek/Edirne/cigersarma.jpg": "c79e5c27f700b8f2b9329dc1aa47ef10",
"assets/assets/images/Yurtici/Yemek/Edirne/tavacigeri.jpg": "0b0bd309a2d762624844cbbfab1d5aa7",
"assets/assets/images/Yurtici/Yemek/Edirne/zirva.jpg": "a41d7e7daf5166a8a3b90fb34ef85909",
"assets/assets/images/Yurtici/Yemek/Eski%25C5%259Fehir/balabankofte.jpg": "da64dba273ece687c81da39584c85438",
"assets/assets/images/Yurtici/Yemek/Eski%25C5%259Fehir/ciborek.jpg": "014a9f75d8b17cd7bdf8f84446bc0781",
"assets/assets/images/Yurtici/Yemek/Eski%25C5%259Fehir/yufkaliburyan.jpg": "0a1367c159487fb4aadd58651eabf678",
"assets/assets/images/Yurtici/Yemek/Mu%25C4%259Fla/bodrummantisi.jpg": "916f5dd7d9515a807f0dc0fd92501b5f",
"assets/assets/images/Yurtici/Yemek/Mu%25C4%259Fla/sulumuglakebabi.jpg": "f475c488825536728f104ee0472b474e",
"assets/assets/images/Yurtici/Yemek/Mu%25C4%259Fla/sundurme.jpg": "e9dbc8f9a6f1dd23b21017711f57e5c2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "59ed44176a7c64415879702aad8c04da",
"assets/NOTICES": "0d44bbbf58837dc7c576c95574ecc0c6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "59f405ebb986bb528ae2cd730c343800",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ac9ec903d7f1e3b159def6b7b16a799c",
"/": "ac9ec903d7f1e3b159def6b7b16a799c",
"main.dart.js": "ee6cac756a19485fec7fbd398adeaaad",
"manifest.json": "fd9d9059335bb557293427f576c68b68",
"version.json": "5b58ec373baccba67f6839f93446f4ee"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
