import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;
const hasDatabase = Boolean(process.env.DATABASE_URL);

export const pool = hasDatabase
  ? new Pool({ connectionString: process.env.DATABASE_URL })
  : null;

export const memoryStore = {
  users: [],
  companies: [],
  products: [
    {
      id: 'p-1',
      name: 'Dell PowerEdge R760',
      category: 'Servers & Compute',
      image: 'https://images.unsplash.com/photo-1591405351990-4726e331f141?w=800',
      specifications: '2x Xeon, 512GB RAM, dual PSU',
      vendor: 'Datacenter Prime'
    },
    {
      id: 'p-2',
      name: 'Cisco Catalyst 9300',
      category: 'Networking Equipment',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800',
      specifications: '48-port PoE+, StackWise',
      vendor: 'NetCore Distribution'
    },
    {
      id: 'p-3',
      name: 'NetApp AFF A250',
      category: 'Storage Systems',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
      specifications: 'All-flash SAN/NAS, 35TB',
      vendor: 'Storage Nexus'
    },
    {
      id: 'p-4',
      name: 'Hybrid Cloud Cluster',
      category: 'Cloud Infrastructure',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
      specifications: 'Kubernetes-ready, autoscaling',
      vendor: 'BlueOrbit Cloud'
    },
    {
      id: 'p-5',
      name: 'Rugged Edge Gateway',
      category: 'Edge Devices',
      image: 'https://images.unsplash.com/photo-1518082593638-b6e73b35d39a?w=800',
      specifications: 'IP67, 5G/LTE, remote telemetry',
      vendor: 'EdgeWorks'
    }
  ],
  quotes: [],
  projects: [
    {
      id: 'pr-1',
      title: 'New Regional Datacenter Buildout',
      budget: '$450K',
      status: 'Open',
      customer: 'Northwind Logistics',
      details: 'Seeking integrators for rack, network, and cooling deployment.'
    }
  ],
  messages: [
    { id: 'm-1', from: 'Northwind Logistics', to: 'You', content: 'Can you share lead times for Catalyst switches?' }
  ]
};
