class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null,
        }
        this.length = 1
    }

    addToHead(value) {
        const newNode = {
            value,
            next: this.head,
        }
        this.head = newNode
        this.length++

        return this
    }

    removeFromHead() {
        if (this.length === 0) {
            return undefined
        }
        
        const value = this.head.value
        this.head = this.head.next
        this.length--

        return value
    }

    find(value) {
        let thisNode = this.head
        while (thisNode) {
            if (thisNode.value === value) {
                return true
            }
            thisNode = thisNode.next
        }

        return false
    }

    remove(value) {
        if (this.length === 0) {
            return undefined
        }

        if (this.head.value === value) {
            this.head = this.head.next
            this.length--
            return this
        }

        let thisNode = this.head
        while (thisNode.next) {
            if (thisNode.next.value === value) {
                thisNode.next = thisNode.next.next
                this.length--
                break
            }
            thisNode = thisNode.next
        }

        return this
    }
}

const list = new LinkedList('first')
    .addToHead('second')
    .addToHead('third')

// console.log(list.removeFromHead())
console.log(list.find('teste'))
console.log(list.remove('second'))