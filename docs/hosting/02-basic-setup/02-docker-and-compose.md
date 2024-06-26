# Using Docker & Docker Compose

Stockedhome is distributed primarily as a Docker container. Doing so allows it to be run reliably with minimal setup on nearly any machine under the sun.

To make setup even easier, Stockedhome recommends using Docker Compose for orchestrating the various containers Stockedhome requires to function. Docker Compose is a simple configuration format that lets you repeatedly set the same Docker containers up with the same configuration every time&mdash;and, better, it makes it easy to change and configure.

Because Stockedhome uses Supabase for a number of backend services (though primarily for their database and storage tech), there are a number of containers to support.

## The Basics of Docker

(if you're already familiar with Docker, feel free to skip)

Docker is a platform where you bundle your service into one or more "containers"&mdash;small virtual machines (VMs) that have one purpose and one purpose only. By using VMs, Docker allows for near-flawless compatibility, incredible separation of concerns, and amazing flexibility.

## The Basics of Docker Compose

Docker Compose is an easy way to configure and distribute Docker setups. Stockedhome uses Docker Compose to make setting Stockedhome up an absolute breeze once the guided configuration process is done.
