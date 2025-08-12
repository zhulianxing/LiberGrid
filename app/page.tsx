"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Globe, Code, Cpu, Zap, Users, Shield, ArrowRight, Star, GitFork } from "lucide-react"

export default function LiberGridPage() {
  const [language, setLanguage] = useState<"en" | "zh">("en")

  const t = {
    en: {
      title: "LiberGrid",
      subtitle: "Decentralized AI Computing Revolution",
      description:
        "Transform idle computing power into a global AI supercomputer. Join the revolution against AI monopolies.",
      getStarted: "Get Started",
      learnMore: "Learn More",
      forDevelopers: "For Developers",
      forMiners: "For Miners",
      quickStart: "Quick Start",
      documentation: "Documentation",
      apiReference: "API Reference",
      examples: "Examples",
      community: "Community",
    },
    zh: {
      title: "LiberGrid",
      subtitle: "去中心化AI计算革命",
      description: "将闲置算力转化为全球AI超级计算机。加入反对AI垄断的革命。",
      getStarted: "开始使用",
      learnMore: "了解更多",
      forDevelopers: "开发者",
      forMiners: "矿工",
      quickStart: "快速开始",
      documentation: "文档",
      apiReference: "API参考",
      examples: "示例",
      community: "社区",
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">LiberGrid</h1>
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Open Source
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#developers" className="text-gray-600 hover:text-gray-900">
                  {t[language].forDevelopers}
                </a>
                <a href="#miners" className="text-gray-600 hover:text-gray-900">
                  {t[language].forMiners}
                </a>
                <a href="#docs" className="text-gray-600 hover:text-gray-900">
                  {t[language].documentation}
                </a>
              </nav>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "zh" : "en")}
                className="text-gray-600"
              >
                <Globe className="w-4 h-4 mr-1" />
                {language === "en" ? "中文" : "EN"}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">{t[language].subtitle}</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">{t[language].description}</p>
          <div className="flex items-center justify-center space-x-4 mb-12">
            <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
              <Star className="w-4 h-4 mr-2" />
              {t[language].getStarted}
            </Button>
            <Button size="lg" variant="outline">
              <GitFork className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">12,847</div>
              <div className="text-gray-600">Active Nodes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">2.4 PH/s</div>
              <div className="text-gray-600">Computing Power</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">156</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">99.9%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      <section id="developers" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t[language].forDevelopers}</h2>
            <p className="text-xl text-gray-600">Build AI applications with our distributed computing network</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Quick Start</h3>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="w-5 h-5 mr-2" />
                    Installation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                    <div className="text-gray-600 mb-2"># Install LiberGrid SDK</div>
                    <div className="text-gray-900">npm install @libergrid/sdk</div>
                    <div className="text-gray-600 mt-4 mb-2"># Or with Python</div>
                    <div className="text-gray-900">pip install libergrid</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Basic Usage
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                    <pre className="text-gray-900">{`import { LiberGrid } from '@libergrid/sdk'

const client = new LiberGrid({
  apiKey: process.env.LIBERGRID_API_KEY
})

// Run inference on distributed network
const response = await client.inference({
  model: 'llama-3.1-70b',
  prompt: 'Explain quantum computing',
  maxTokens: 500
})

console.log(response.text)`}</pre>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Advanced Examples</h3>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Cpu className="w-5 h-5 mr-2" />
                    Distributed Training
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                    <pre className="text-gray-900">{`// Distribute training across network
const trainer = client.createTrainer({
  model: 'custom-llama-7b',
  dataset: 'my-dataset',
  nodes: 50 // Use 50 distributed nodes
})

await trainer.start({
  epochs: 10,
  batchSize: 32,
  learningRate: 0.001,
  onProgress: (progress) => {
    console.log(\`Training: \${progress.epoch}/10\`)
  }
})`}</pre>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Privacy-Preserving Inference
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                    <pre className="text-gray-900">{`// Secure multi-party computation
const secureClient = client.createSecureSession({
  encryption: 'homomorphic',
  nodes: ['node1', 'node2', 'node3']
})

const result = await secureClient.inference({
  model: 'private-model',
  data: encryptedData,
  preservePrivacy: true
})`}</pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="mr-4">
              <ArrowRight className="w-4 h-4 mr-2" />
              View Full Documentation
            </Button>
            <Button size="lg" variant="outline">
              <Code className="w-4 h-4 mr-2" />
              API Reference
            </Button>
          </div>
        </div>
      </section>

      <section id="miners" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t[language].forMiners}</h2>
            <p className="text-xl text-gray-600">Contribute your computing power and earn LiberCoin rewards</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Setup Your Node</h3>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Cpu className="w-5 h-5 mr-2" />
                    Docker Installation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                    <pre className="text-gray-900">{`# Pull LiberGrid miner image
docker pull libergrid/miner:latest

# Run with your wallet address
docker run -d \\
  --name libergrid-miner \\
  --gpus all \\
  -e WALLET_ADDRESS=your_wallet_here \\
  -e WORKER_NAME=my-rig-01 \\
  -p 8080:8080 \\
  libergrid/miner:latest`}</pre>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Native Installation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                    <pre className="text-gray-900">{`# Download and install
curl -sSL https://get.libergrid.io | bash

# Configure your miner
libergrid config set wallet your_wallet_address
libergrid config set worker-name my-worker

# Start mining
libergrid start --gpu-count 4`}</pre>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Monitoring & Optimization</h3>

              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    Performance Monitoring
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                    <pre className="text-gray-900">{`# Check miner status
libergrid status

# View earnings
libergrid earnings --period 7d

# Monitor GPU utilization
libergrid monitor --gpu --realtime

# Output:
# GPU 0: 98% | Temp: 72°C | Power: 250W
# GPU 1: 95% | Temp: 69°C | Power: 245W
# Earnings: 12.5 LBC/day`}</pre>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Auto-Optimization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm">
                    <pre className="text-gray-900">{`# Enable auto-optimization
libergrid config set auto-optimize true
libergrid config set max-temp 80
libergrid config set power-limit 300

# Custom optimization script
libergrid optimize \\
  --target-efficiency 0.95 \\
  --balance-temp-performance \\
  --enable-dynamic-clocking`}</pre>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="mr-4">
              <ArrowRight className="w-4 h-4 mr-2" />
              Start Mining Now
            </Button>
            <Button size="lg" variant="outline">
              <Users className="w-4 h-4 mr-2" />
              Join Miner Community
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">LiberGrid</h3>
              <p className="text-gray-600 text-sm">Decentralized AI computing for everyone</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Developers</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    API Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    SDK Reference
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Code Examples
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Miners</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Getting Started
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Hardware Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Earnings Calculator
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Whitepaper
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-900">
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
            © 2024 LiberGrid. Open source under MIT License.
          </div>
        </div>
      </footer>
    </div>
  )
}
