let edges_to_add = [
    ['ratdom_maze1', 'ratdom_maze2'], 
    ['ratdom_maze2', 'ratdom_maze3'],
    ['ratdom_maze2', 'ratdom_maze_448'],
    ['ratdom_maze3', 'ratdom_bwm1'],
    ['ratdom_maze_448', 'ratdom_maze_458'],
    ['ratdom_maze_458', 'ratdom_maze_568'],
    ['ratdom_maze_458', 'ratdom_maze_447'],
    ['ratdom_maze_447', 'ratdom_maze_438'],
    ['ratdom_maze_447', 'ratdom_maze_457'],
    ['ratdom_maze_438', 'ratdom_maze_428'],
    ['ratdom_maze_428', 'ratdom_maze_418'],
    ['ratdom_maze_418', 'ratdom_maze_427'],
    ['ratdom_maze_427', 'ratdom_maze_437_up'],
    ['ratdom_maze_427', 'ratdom_maze_517'],
    ['ratdom_maze_437_up', 'ratdom_maze_426'],
    ['ratdom_maze_426', 'ratdom_maze_416'],
    ['ratdom_maze_426', 'ratdom_maze_417'],
    ['ratdom_maze_426', 'ratdom_maze_436'],
    ['ratdom_maze_416', 'ratdom_maze_525'],
    ['ratdom_maze_525', 'ratdom_maze_635'],
    ['ratdom_maze_525', 'ratdom_maze_636'],
    ['ratdom_maze_635', 'ratdom_maze_644'],
    ['ratdom_maze_644', 'ratdom_maze_655'],
    ['ratdom_maze_655', 'ratdom_maze_645'],
    ['ratdom_maze_655', 'ratdom_maze_664'],
    ['ratdom_maze_645', 'ratdom_maze_636'],
    ['ratdom_maze_636', 'ratdom_maze_526'],
    ['ratdom_maze_526', 'ratdom_maze_516'],
    ['ratdom_maze_526', 'ratdom_maze_537'],
    ['ratdom_maze_537', 'ratdom_maze_547'],
    ['ratdom_maze_547', 'ratdom_maze_657'],
    ['ratdom_maze_657', 'ratdom_maze_646'],
    ['ratdom_maze_657', 'ratdom_maze_666_up'],
    ['ratdom_maze_646', 'ratdom_maze_637'],
    ['ratdom_maze_637', 'ratdom_maze_647'],
    ['ratdom_maze_647', 'ratdom_maze_638'],
    ['ratdom_maze_647', 'ratdom_maze_658'],
    ['ratdom_maze_638', 'ratdom_maze_628'],
    ['ratdom_maze_628', 'ratdom_maze_618'],
    ['ratdom_maze_618', 'ratdom_maze_527'],
    ['ratdom_maze_527', 'ratdom_maze_538'],
    ['ratdom_maze_538', 'ratdom_maze_648'],
    ['ratdom_maze_648', 'ratdom_maze_558'],
    ['ratdom_maze_558', 'ratdom_maze_467'],
    ['ratdom_maze_467', 'ratdom_maze_557'],
    ['ratdom_maze_557', 'ratdom_maze_566_up'],
    ['ratdom_maze_566_up', 'ratdom_maze_456'],
    ['ratdom_maze_456', 'ratdom_maze_445'],
    ['ratdom_maze_445', 'ratdom_maze_435'],
    ['ratdom_maze_445', 'ratdom_maze_455'],
    ['ratdom_maze_435', 'ratdom_maze_424'],
    ['ratdom_maze_424', 'ratdom_maze_514'],
    ['ratdom_maze_514', 'ratdom_maze_523'],
    ['ratdom_maze_523', 'ratdom_maze_534'],
    ['ratdom_maze_534', 'ratdom_maze_543'],
    ['ratdom_maze_543', 'ratdom_maze_533_down'],
    ['ratdom_maze_543', 'ratdom_maze_543d'],
    ['ratdom_maze_533_down', 'ratdom_maze_542_up'],
    ['ratdom_maze_542_up', 'ratdom_maze_532'],
    ['ratdom_maze_532', 'ratdom_maze_522'],
    ['ratdom_maze_532', 'ratdom_maze_541'],
    ['ratdom_maze_522', 'ratdom_maze_433'],
    ['ratdom_maze_433', 'ratdom_maze_442'],
    ['ratdom_maze_433', 'ratdom_maze_443'],
    ['ratdom_maze_442', 'ratdom_maze_552'],
    ['ratdom_maze_552', 'ratdom_maze_461'],
    ['ratdom_maze_461', 'ratdom_maze_451'],
    ['ratdom_maze_461', 'ratdom_maze_572'],
    ['ratdom_maze_451', 'ratdom_maze_441'],
    ['ratdom_maze_441', 'ratdom_maze_531'],
    ['ratdom_maze_441', 'ratdom_maze_452'],
    ['ratdom_maze_531', 'ratdom_maze_521'],
    ['ratdom_maze_521', 'ratdom_maze_612'],
    ['ratdom_maze_612', 'ratdom_maze_622'],
    ['ratdom_maze_622', 'ratdom_maze_533_up'],
    ['ratdom_maze_533_up', 'ratdom_maze_623'],
    ['ratdom_maze_623', 'ratdom_maze_513'],
    ['ratdom_maze_623', 'ratdom_maze_634'],
    ['ratdom_maze_513', 'ratdom_maze_422'],
    ['ratdom_maze_422', 'ratdom_maze_432_up'],
    ['ratdom_maze_432_up', 'ratdom_maze_421'],
    ['ratdom_maze_421', 'ratdom_maze_412_down'],
    ['ratdom_maze_457', 'ratdom_maze_446'],
    ['ratdom_maze_457', 'ratdom_maze_466'],
    ['ratdom_maze_446', 'ratdom_maze_436'],
    ['ratdom_maze_436', 'ratdom_maze_425'],
    ['ratdom_maze_436', 'ratdom_maze_426'],
    ['ratdom_maze_425', 'ratdom_maze_415'],
    ['ratdom_maze_415', 'ratdom_maze_524'],
    ['ratdom_maze_524', 'ratdom_maze_434'],
    ['ratdom_maze_524', 'ratdom_maze_535'],
    ['ratdom_maze_541', 'ratdom_maze_551'],
    ['ratdom_maze_551', 'ratdom_maze_661_up'],
    ['ratdom_maze_661_up', 'ratdom_maze_652'],
    ['ratdom_maze_652', 'ratdom_maze_641'],
    ['ratdom_maze_652', 'ratdom_maze_662_up'],
    ['ratdom_maze_641', 'ratdom_maze_631'],
    ['ratdom_maze_641', 'ratdom_maze_632'],
    ['ratdom_maze_631', 'ratdom_maze_621'],
    ['ratdom_maze_621', 'ratdom_maze_611'],
    ['ratdom_maze_621', 'ratdom_maze_632'],
    ['ratdom_maze_658', 'ratdom_maze_567'],
    ['ratdom_maze_658', 'ratdom_maze_768'],
    ['ratdom_maze_666_up', 'ratdom_maze_656'],
    ['ratdom_maze_656', 'ratdom_maze_546'],
    ['ratdom_maze_546', 'ratdom_maze_536'],
    ['ratdom_maze_536', 'ratdom_maze_545_up'],
    ['ratdom_maze_545_up', 'ratdom_maze_535'],
    ['ratdom_maze_452', 'ratdom_maze_562'],
    ['ratdom_maze_562', 'ratdom_maze_453'],
    ['ratdom_maze_562', 'ratdom_maze_572'],
    ['ratdom_maze_453', 'ratdom_maze_463_up'],
    ['ratdom_maze_463_up', 'ratdom_maze_454'],
    ['ratdom_maze_454', 'ratdom_maze_544'],
    ['ratdom_maze_454', 'ratdom_maze_464'],
    ['ratdom_maze_544', 'ratdom_maze_634'],
    ['ratdom_maze_443', 'ratdom_maze_553'],
    ['ratdom_maze_553', 'ratdom_maze_662_up'],
    ['ratdom_maze_553', 'ratdom_maze_563_up'],
    ['ratdom_maze_662_up', 'ratdom_maze_652'],
    ['ratdom_maze_652', 'ratdom_maze_641'],
    ['ratdom_maze_517', 'ratdom_maze_517a'],
    ['ratdom_maze_466', 'ratdom_maze_476'],
    ['ratdom_maze_476', 'ratdom_maze_565'],
    ['ratdom_maze_565', 'ratdom_maze_555'],
    ['ratdom_maze_555', 'ratdom_maze_545_down'],
    ['ratdom_maze_455', 'ratdom_maze_564_up'],
    ['ratdom_maze_455', 'ratdom_maze_455a'],
    ['ratdom_maze_564_up', 'ratdom_maze_554'],
    ['ratdom_maze_554', 'ratdom_maze_643'],
    ['ratdom_maze_554', 'ratdom_maze_563_up'],
    ['ratdom_maze_643', 'ratdom_maze_633'],
    ['ratdom_maze_643', 'ratdom_maze_653'],
    ['ratdom_maze_633', 'ratdom_maze_642'],
    ['ratdom_maze_642', 'ratdom_maze_632'],
    ['ratdom_maze_642', 'ratdom_maze_653'],
    ['ratdom_maze_634', 'ratdom_maze_624'],
    ['ratdom_maze_624', 'ratdom_maze_515'],
    ['ratdom_maze_515', 'ratdom_maze_625_up'],
    ['ratdom_maze_625_up', 'ratdom_maze_616_down'],
    ['ratdom_maze_616_down', 'ratdom_maze_626'],
    ['ratdom_maze_535', 'ratdom_maze_535a'],
    ['ratdom_maze_535', 'ratdom_maze_444'],
    ['ratdom_maze_444', 'ratdom_maze_434'],
    ['ratdom_maze_434', 'ratdom_maze_423'],
    ['ratdom_maze_434', 'ratdom_maze_434b'],
    ['ratdom_maze_434b', 'ratdom_maze_535a'],
    ['ratdom_maze_423', 'ratdom_maze_414'],
    ['ratdom_maze_414', 'ratdom_maze_403'],
    ['ratdom_maze_653', 'ratdom_maze_642'],
    ['ratdom_maze_572', 'ratdom_maze_562'],
    ['ratdom_maze_632', 'ratdom_maze_621'],
    ['ratdom_maze_455a', 'blackwater_mountain55'],
    ['ratdom_maze_403', 'ratdom_maze_413_up'],
    ['ratdom_maze_413_up', 'ratdom_maze_402'],
    ['ratdom_maze_402', 'ratdom_maze_412_up'],
    ['ratdom_maze_563_up', 'ratdom_maze_554'],
    ['ratdom_maze_417', 'ratdom_maze_506'],
    ['ratdom_maze_506', 'ratdom_maze_616_up'],
    ['ratdom_maze_616_up', 'ratdom_maze_705']
]

function findPath() {
    const start = document.getElementById('start').value
    const end = document.getElementById('end').value
    const door533 = document.getElementById('door533').checked
    const door545 = document.getElementById('door545').checked

    if (door533) {
        edges_to_add.push(['ratdom_maze_533_up', 'ratdom_maze_533_down'])
    }
    if (door545) {
        edges_to_add.push(['ratdom_maze_545_up', 'ratdom_maze_545_down'])
    }

    let graph = {}

    // Xây dựng đồ thị từ danh sách cạnh
    for (let [a, b, direction] of edges_to_add) {
        if (!graph[a]) graph[a] = {};
        if (!graph[b]) graph[b] = {};
        graph[a][b] = direction;
        graph[b][a] = 9 - direction; // Đồ thị vô hướng
    }

    const path = shortestPath(graph, start, end)
    console.log(path)

    const resultElement = document.getElementById('result')
    while (resultElement.hasChildNodes()) {
        resultElement.removeChild(resultElement.firstChild)
    }

    for (let map of path) {
        const mapElement = document.createElement('p')
        mapElement.textContent = map
        resultElement.appendChild(mapElement)
    }
}

function shortestPath(graph, startNode, endNode) {
    // Kiểm tra nếu startNode hoặc endNode không tồn tại trong đồ thị
    if (!graph[startNode] || !graph[endNode]) {
        return [];
    }

    // Queue lưu trữ các đỉnh cần duyệt
    let queue = [[startNode, [], 0]]; // Mỗi phần tử là [node, path, totalWeight]

    // Set lưu trữ các đỉnh đã duyệt
    let visited = new Set();
    visited.add(startNode);

    while (queue.length > 0) {
        let [currentNode, currentPath] = queue.shift();

        // Kiểm tra nếu currentNode là đích
        if (currentNode === endNode) {
            return currentPath
        }

        // Duyệt các đỉnh kề với currentNode và thêm vào queue
        for (let neighbor in graph[currentNode]) {
            if (!visited.has(neighbor)) {
                // Đánh dấu đỉnh này đã duyệt và thêm vào queue
                visited.add(neighbor);
                queue.push([neighbor, [...currentPath, { from: currentNode, to: neighbor, direction: graph[currentNode][neighbor] }]]);
            }
        }
    }

    // Trường hợp không tìm thấy đường đi từ startNode đến endNode
    return [];
}