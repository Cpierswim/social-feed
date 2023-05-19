pipeline {
    agent any

    environment{
        def nodejsTool = tool name: 'Node-20-tool', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'
        def dockerTool = tool name: 'docker-latest-tool', type: 'org.jenkinsci.plugins.docker.commons.tools.DockerTool'
        PATH = "${nodejsTool}/bin:${dockerTool}/bin:${env.PATH}"
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Create Production React Build'){
            steps{
                sh 'npm run-script build'
            }
        }

        stage('Build Docker Image') {
            steps {

                sh """
                    docker build -t cpierswim/social-feed:2.0.$BUILD_NUMBER .
                    docker images
                """

            }
        }

        stage('Push Docker Image') {
            steps {

                sh 'echo "Pushing Docker images to Docker Hub"'
                withCredentials([usernamePassword(credentialsId: 'personal-docker-credentials', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
					sh 'docker login -u ${DOCKER_USERNAME} -p ${DOCKER_PASSWORD}'
                }

                sh "docker push cpierswim/social-feed:2.0.$BUILD_NUMBER"

            }
        }

        stage('Deploy New Image to AWS EC2'){
            steps{
                sh 'echo "Deploying to EC2 instance..."'

                sshagent(['social-feed-linux-kp-shh-credentials']) {
                    sh """
                        SSH_COMMAND="ssh -o StrictHostKeyChecking=no ubuntu@18.191.200.34"
                        CONTAINER_EXISTS_AND_IS_RUNNING="docker ps -q -f name='docker rm hosted-social-feed-app'"
                        CONTAINER_EXISTS="docker ps -a -q -f name='docker rm hosted-social-feed-app'"
                        echo "CONTAINER_EXISTS_AND_IS_RUNNING=\$CONTAINER_EXISTS_AND_IS_RUNNING"
                        echo "CONTAINER_EXISTS=\$CONTAINER_EXISTS"
                        if(C)
                        \$SSH_COMMAND "docker stop hosted-social-feed-app && docker rm hosted-social-feed-app"
                        \$SSH_COMMAND "docker pull cpierswim/social-feed:2.0.$BUILD_NUMBER"
                        \$SSH_COMMAND "docker run -d -p 80:80 --name hosted-social-feed-app cpierswim/social-feed:2.0.$BUILD_NUMBER"
                    """
                }
            }
        }
    }
}