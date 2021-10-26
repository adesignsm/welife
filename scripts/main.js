var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100000);
camera.position.z = 30;

var renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;

document.getElementById("canvas-container").appendChild(renderer.domElement);

window.addEventListener("resize", function() {

    var w = window.innerWidth;
    var h = window.innerHeight;

    renderer.setSize(w, h);

    camera.aspect = w / h;
    camera.updateProjectionMatrix();
});

var controls = new THREE.OrbitControls(camera, renderer.domElement);

var update = function() {


};

var render = function() {

    renderer.render(scene, camera);
}

var animate = function() {

    requestAnimationFrame(animate);

    update();
    render();
}

animate();