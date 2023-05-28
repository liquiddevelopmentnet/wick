services {
    cdn {
        root /services/cdn_node
        run 'ts-node src/index.ts'
        env PORT $port // $port is a random port but individual in every use
        load_balancing
    }
}
