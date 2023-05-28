@schema {
    services {
        cdn {
            root: string
            run: string
            env: object
            load_balancing: boolean
        }
    }
}

services {
    cdn {
        root /services/cdn_node
        run 'ts-node src/index.ts'

        // every call to an object assigns a new variable to the in this case 'env' object
        env PORT $port // $port is a random port but individual in every use
        env lol hi // $port is a random port but individual in every use

        load_balancing
    }
}
