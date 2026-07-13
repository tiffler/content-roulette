import React from 'react'
import {
  User, Users, Briefcase, SmileyWink, At, EnvelopeSimple, Envelope, Phone, MapPin,
  Buildings, AppWindow, Tag, LinkSimple,
  Laptop, Desktop, Barcode, Hash, Package, Truck,
  CalendarBlank, Calendar, CalendarCheck, CalendarDots, Clock,
  CreditCard, CurrencyDollar, Percent,
  Globe, GlobeSimple, Circuitry,
} from '@phosphor-icons/react'
import GeneratorCard from './GeneratorCard'

const ICON_SIZE = 20

const SECTIONS = [
  {
    id: 'people',
    label: 'People & Contact',
    accent: 'var(--purple)',
    icon: <Users size={ICON_SIZE} weight="bold" />,
    cards: [
      { type: 'names', title: 'Full Name', icon: <User size={ICON_SIZE} />, label: 'Generate Name' },
      { type: 'jobTitle', title: 'Job Title', icon: <Briefcase size={ICON_SIZE} />, label: 'Generate Job Title' },
      { type: 'funJobTitle', title: 'Fun Job Title', icon: <SmileyWink size={ICON_SIZE} />, label: 'Generate Fun Job Title' },
      { type: 'username', title: 'Username', icon: <At size={ICON_SIZE} />, label: 'Generate Username' },
      { type: 'personalEmails', title: 'Personal Email', icon: <EnvelopeSimple size={ICON_SIZE} />, label: 'Generate Personal Email' },
      { type: 'workEmails', title: 'Work Email', icon: <Envelope size={ICON_SIZE} />, label: 'Generate Work Email' },
      { type: 'phones', title: 'Phone Number', icon: <Phone size={ICON_SIZE} />, label: 'Generate Phone' },
      { type: 'addresses', title: 'Full Address', icon: <MapPin size={ICON_SIZE} />, label: 'Generate Address' },
    ],
  },
  {
    id: 'business',
    label: 'Business & Apps',
    accent: 'var(--cyan)',
    icon: <Buildings size={ICON_SIZE} weight="bold" />,
    cards: [
      { type: 'organizations', title: 'Organization Name', icon: <Buildings size={ICON_SIZE} />, label: 'Generate Org Name' },
      { type: 'apps', title: 'App Name', icon: <AppWindow size={ICON_SIZE} />, label: 'Generate App Name' },
      { type: 'statusLabel', title: 'Status Label', icon: <Tag size={ICON_SIZE} />, label: 'Generate Status' },
      { type: 'url', title: 'URL', icon: <LinkSimple size={ICON_SIZE} />, label: 'Generate URL' },
    ],
  },
  {
    id: 'assets',
    label: 'Laptops & Assets',
    accent: 'var(--orange)',
    icon: <Laptop size={ICON_SIZE} weight="bold" />,
    cards: [
      { type: 'mac', title: 'Mac Device', icon: <Laptop size={ICON_SIZE} />, label: 'Generate Mac' },
      { type: 'windows', title: 'Windows Device', icon: <Desktop size={ICON_SIZE} />, label: 'Generate Windows' },
      { type: 'assets', title: 'Asset Name', icon: <Barcode size={ICON_SIZE} />, label: 'Generate Asset' },
      { type: 'serials', title: 'Serial Number', icon: <Hash size={ICON_SIZE} />, label: 'Generate Serial #' },
      { type: 'ups', title: 'UPS Tracking', icon: <Package size={ICON_SIZE} />, label: 'Generate UPS #' },
      { type: 'fedex', title: 'FedEx Tracking', icon: <Truck size={ICON_SIZE} />, label: 'Generate FedEx #' },
    ],
  },
  {
    id: 'dates',
    label: 'Dates & Times',
    accent: 'var(--green)',
    icon: <Calendar size={ICON_SIZE} weight="bold" />,
    cards: [
      { type: 'shortDate', title: 'Short Date', subtitle: 'MM/DD/YYYY', icon: <CalendarBlank size={ICON_SIZE} />, label: 'Generate Date' },
      { type: 'shortYearDate', title: 'Short Year Date', subtitle: 'MM/DD/YY', icon: <Calendar size={ICON_SIZE} />, label: 'Generate Date' },
      { type: 'abbrDate', title: 'Abbr Date', subtitle: 'Jan 1, 2026', icon: <CalendarCheck size={ICON_SIZE} />, label: 'Generate Date' },
      { type: 'longDate', title: 'Long Date', subtitle: 'January 1, 2026', icon: <CalendarDots size={ICON_SIZE} />, label: 'Generate Date' },
      { type: 'timeValue', title: 'Time', icon: <Clock size={ICON_SIZE} />, label: 'Generate Time' },
    ],
  },
  {
    id: 'payment',
    label: 'Payment & Numbers',
    accent: 'var(--yellow)',
    icon: <CreditCard size={ICON_SIZE} weight="bold" />,
    cards: [
      { type: 'creditCard', title: 'Credit Card', icon: <CreditCard size={ICON_SIZE} />, label: 'Generate Card #' },
      { type: 'currency', title: 'Currency ($USD)', icon: <CurrencyDollar size={ICON_SIZE} />, label: 'Generate Amount' },
      { type: 'percentage', title: 'Percentage', icon: <Percent size={ICON_SIZE} />, label: 'Generate %' },
    ],
  },
  {
    id: 'network',
    label: 'Network',
    accent: 'var(--pink)',
    icon: <Globe size={ICON_SIZE} weight="bold" />,
    cards: [
      { type: 'ipv4', title: 'IPv4 Address', icon: <Globe size={ICON_SIZE} />, label: 'Generate IPv4' },
      { type: 'ipv6', title: 'IPv6 Address', icon: <GlobeSimple size={ICON_SIZE} />, label: 'Generate IPv6' },
      { type: 'macAddress', title: 'MAC Address', icon: <Circuitry size={ICON_SIZE} />, label: 'Generate MAC' },
    ],
  },
]

export default function GeneratorGrid() {
  return (
    <div className="generator-grid">
      {SECTIONS.map(section => (
        <React.Fragment key={section.id}>
          <div className="section-bar" style={{ '--accent': section.accent }}>
            {section.icon}
            {section.label}
          </div>
          {section.cards.map(card => (
            <GeneratorCard key={card.type} accent={section.accent} {...card} />
          ))}
        </React.Fragment>
      ))}
    </div>
  )
}
