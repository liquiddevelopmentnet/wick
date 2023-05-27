services {
    cdn {
        root '/services/cdn_node'
        run 'ts-node src/index.ts'
        env 'PORT' $port // $port is a random port but individual in every use
        load_balancing
    }
    
    link-shortener {
        root '/services/link-shortener'
        run 'java -jar build/LinkShortener.jar'
        env 'HTTP_PORT' $port
    }
}
