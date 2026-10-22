import {
  FiActivity, FiBookOpen, FiBox, FiCalendar, FiCloud, FiCode,
  FiCpu, FiGrid, FiMapPin, FiShield, FiUsers,
} from 'react-icons/fi';

export const contact = {
  email: 'tekzaiaws@gmail.com',
  phone: '+91 9400480459',
  phoneHref: 'tel:+919400480459',
  address: '554, PHC, Kasaragod, 671121, Kerala',
  maps: 'https://www.google.com/maps/search/?api=1&query=554+PHC+Kasaragod+671121+Kerala',
  whatsapp: 'https://wa.me/919400480459',
  hours: 'Monday to Friday, 8 am – 5 pm',
};

export const services = [
  {
    id: 'custom-software', icon: FiCode, title: 'Custom software development', short: 'Software that fits the way you work.',
    description: 'From web and mobile applications to enterprise systems, we design and build software around your business. Thoughtfully made, easy to use, and ready to grow with you.',
    features: ['Web and mobile applications', 'Enterprise-level solutions', 'Fully customized features', 'Scalable and flexible architecture', 'End-to-end support'],
  },
  {
    id: 'artificial-intelligence', icon: FiCpu, title: 'AI & machine learning', short: 'Make more possible with intelligent technology.',
    description: 'Turn your data into smarter decisions. Our AI and machine learning solutions bring predictive insights, practical automation, and custom intelligence into your everyday operations.',
    features: ['Advanced data analytics', 'Predictive modeling', 'Process automation', 'Custom AI integration', 'Industry-specific AI solutions'],
  },
  {
    id: 'cloud-solutions', icon: FiCloud, title: 'Cloud solutions', short: 'The freedom to grow. The foundation to do it.',
    description: 'Build on a secure, reliable cloud foundation. From migration and infrastructure to ongoing management, we help your business scale without adding unnecessary complexity.',
    features: ['Cloud migration and setup', 'Infrastructure management', 'Backup and recovery', 'Scalable growth support', 'Ongoing cloud maintenance'],
  },
  {
    id: 'erp-systems', icon: FiGrid, title: 'ERP systems', short: 'Bring every part of your business together.',
    description: 'Connect finance, people, and operations in one place. Our industry-specific ERP solutions make information accessible and help your teams work with clarity and confidence.',
    features: ['Financial and HR modules', 'Supply chain integration', 'Real-time data access', 'Industry-specific customization', 'Enhanced productivity'],
  },
  {
    id: 'data-analytics', icon: FiActivity, title: 'Data analytics & business intelligence', short: 'Less guesswork. More clarity.',
    description: 'Find the story in your data. Clear dashboards, useful reporting, and real-time insights help you understand what matters and decide what comes next.',
    features: ['Data visualization tools', 'Customizable reports', 'Real-time dashboards', 'KPI tracking', 'Strategic decision support'],
  },
  {
    id: 'cybersecurity', icon: FiShield, title: 'Cybersecurity solutions', short: 'Move forward with peace of mind.',
    description: 'Protect what your business depends on. We bring together security assessments, threat detection, and ongoing monitoring to help safeguard your systems and digital assets.',
    features: ['Security audits and assessments', 'Threat detection and response', 'Compliance support', 'Data encryption protocols', 'Continuous monitoring'],
  },
];

export const products = [
  {
    id: 'tkz-lms', code: 'TKZ-LMS', icon: FiBookOpen, tone: 'lavender', title: 'Learning management', headline: 'Make room for better learning.',
    description: 'A learning management system that brings students, educators, and content together. AI-powered tracking and interactive modules create a more personal learning experience.',
    features: ['Interactive learning modules', 'AI-driven progress tracking', 'Quizzes & assessments', 'User-friendly dashboard', 'Real-time analytics', 'Course customization'],
  },
  {
    id: 'tkz-amt', code: 'TKZ-AMT', icon: FiBox, tone: 'mint', title: 'Asset management', headline: 'Everything, in its place.',
    description: 'Keep your resources in view, from acquisition to maintenance. Real-time tracking, automated scheduling, and useful alerts help your team get more from every asset.',
    features: ['Real-time asset tracking', 'Automated maintenance scheduling', 'AI-driven insights', 'Customizable alerts', 'Lifecycle management', 'Data analytics for optimization'],
  },
  {
    id: 'tkz-crm', code: 'TKZ-CRM', icon: FiUsers, tone: 'peach', title: 'Customer relationships', headline: 'Good relationships. Lasting growth.',
    description: 'Give every customer connection the attention it deserves. A flexible CRM that brings together customer profiles, sales, marketing, and support in one place.',
    features: ['Customizable client profiles', 'Sales & marketing automation', 'Data-driven insights', 'Customer support integration', 'KPI tracking', 'Custom reporting tools'],
  },
  {
    id: 'tkz-bks', code: 'TKZ-BKS', icon: FiCalendar, tone: 'blue', title: 'Booking system', headline: 'A simpler way to fill your calendar.',
    description: 'Make appointments and reservations feel effortless. Flexible scheduling, secure access, and timely reminders keep your bookings and your business moving.',
    features: ['Effortless booking interface', 'Calendar integration', 'Automated reminders', 'Role-based access', 'Insightful analytics', 'Multiple payment options'],
  },
  {
    id: 'tkz-mapt', code: 'TKZ-MAPT', icon: FiMapPin, tone: 'sand', title: 'Map tracking', headline: 'Know where business is moving.',
    description: 'See your assets in real time and make every journey count. Location monitoring, route optimization, and alerts bring clarity to logistics and field operations.',
    features: ['Real-time location monitoring', 'Geofencing', 'Route optimization', 'Historical tracking data', 'Customizable alerts', 'Analytics dashboard'],
  },
];

export const process = [
  { title: 'First, we listen.', description: 'Your goals, your challenges, your big picture. We start by understanding what matters to you.' },
  { title: 'Then, we shape it.', description: 'Together, we turn the right questions into a clear plan and a considered design.' },
  { title: 'We make it real.', description: 'Thoughtful development, open communication, and careful testing bring your solution to life.' },
  { title: 'And keep it growing.', description: 'From launch to what comes next, we stay close with support that evolves with your business.' },
];

export const testimonials = [
  { name: 'Abdullah Al Marri', initials: 'AA', quote: 'Our experience with TekzAI’s AI and machine learning services was outstanding. They developed predictive models that have streamlined our inventory management and improved patient care. Their expertise in data science was evident at every stage, and we saw a direct impact on efficiency. They’re a reliable partner we trust.' },
  { name: 'Shinto Mathew', initials: 'SM', quote: 'With the TKZ-AMT asset management tool, TekzAI Solutions has taken our asset tracking capabilities to a whole new level. The real-time alerts and lifecycle management features have streamlined our operations and reduced maintenance costs. The ease of integration and user-friendly interface make it a highly effective tool. I am extremely pleased with the results!' },
  { name: 'Fatima Al Hashimi', initials: 'FA', quote: 'I had a great experience with TekzAI! They have a highly competent and skilled team in place. A very professional organization where the customer is the top priority.' },
  { name: 'Sameer Kaur', initials: 'SK', quote: 'TekzAI Solutions provided exceptional custom software development services for our business. From the initial consultation to deployment, their team showed deep technical knowledge and a commitment to meeting our unique requirements. The solution they delivered has been a vital part of our growth strategy, and we couldn’t be happier with the partnership.' },
];
