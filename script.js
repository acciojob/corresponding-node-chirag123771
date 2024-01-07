function correspondingNode(tree1, tree2, node) {
  if (!tree1 || !tree2 || !node) {
        return null;
    }

    const pathToNode = getPathToNode(tree1, node);

    let correspondingNode = tree2;
    for (const index of pathToNode) {
        correspondingNode = correspondingNode.children[index];
    }

    return correspondingNode;
}

function getPathToNode(root, targetNode) {
    const path = [];

    function findNode(currentNode) {
        if (!currentNode) {
            return false;
        }

        if (currentNode === targetNode) {
            return true;
        }

        for (let i = 0; i < currentNode.children.length; i++) {
            if (findNode(currentNode.children[i])) {
                path.unshift(i);
                return true;
            }
        }

        return false;
    }

    findNode(root);
    return path;
}

module.exports=correspondingNode;
