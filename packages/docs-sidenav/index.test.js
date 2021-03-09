import { render, fireEvent, screen } from '@testing-library/react'
import DocsSidenav from './'
import props from './props'
import { getTestValues } from 'swingset/testing'

const defaultProps = getTestValues(props)

describe('<DocsSidenav />', () => {
  it('renders a root element with a g-docs-sidenav className', () => {
    const { container } = render(<DocsSidenav {...defaultProps} />)
    expect(container.firstChild.className).toContain('g-docs-sidenav')
  })

  it('renders and displays nesting levels correctly', () => {
    render(<DocsSidenav {...defaultProps} />)
    // For this test, we step through the expected nesting levels based on
    // the fixture data, ensuring that each level is nested properly and has
    // the classes to reflect whether it's shown as active
    const branchOne = screen.getByText('Vault Agent').closest('button')
    expect(branchOne.getAttribute('data-is-active')).toBe('true')
    expect(branchOne.getAttribute('data-is-open')).toBe('true')

    const branchTwo = screen.getByText('Auto-Auth').closest('button')
    expect(branchTwo.getAttribute('data-is-active')).toBe('true')
    expect(branchTwo.getAttribute('data-is-open')).toBe('true')

    const branchThree = screen.getByText('Methods').closest('button')
    expect(branchThree.getAttribute('data-is-active')).toBe('true')
    expect(branchThree.getAttribute('data-is-open')).toBe('true')

    const activeLeaf = screen.getByText('AWS').closest('a')
    expect(activeLeaf.getAttribute('data-is-active')).toBe('true')

    // Let's also make sure that other pages are not also displaying as active
    // First we check an similarly named page at a different level
    const inactiveLeafOne = screen.getByText('AWS Agent').closest('a')
    expect(inactiveLeafOne.getAttribute('data-is-active')).toBe('false')
    // Next we check a page at the same level but with a different name
    const inactiveLeafTwo = screen.getByText('GCP').closest('a')
    expect(inactiveLeafTwo.getAttribute('data-is-active')).toBe('false')
    // Finally we check the overview page at the same level
    const inactiveLeafThree = screen
      .getAllByText('Overview')
      .map((node) => node.closest('a'))
      .filter((linkElem) => {
        return linkElem.getAttribute('href') === '/docs/agent/autoauth/methods'
      })[0]
    expect(inactiveLeafThree.getAttribute('data-is-active')).toBe('false')
  })

  it('renders accurately when the current page is an "overview"', () => {
    const currentPath = 'agent/autoauth/methods'
    const expectedHref = `/docs/${currentPath}`
    render(<DocsSidenav {...defaultProps} currentPath={currentPath} />)
    // Check the "overview" index node we've set as active using currentPath
    const activeIndexLeaf = screen
      .getAllByText('Overview')
      .map((node) => node.closest('a'))
      .filter((linkElem) => {
        return linkElem.getAttribute('href') === expectedHref
      })[0]
    expect(activeIndexLeaf.getAttribute('data-is-active')).toBe('true')
  })

  it('expands and collapses nav branch items when clicked', () => {
    render(<DocsSidenav {...defaultProps} />)
    // Ensure the element exists, and is currently open
    const branchTwo = screen.getByText('Auto-Auth').closest('button')
    expect(branchTwo.getAttribute('data-is-active')).toBe('true')
    expect(branchTwo.getAttribute('data-is-open')).toBe('true')
    // Click the item, then ensure it's closed, but still active
    fireEvent.click(branchTwo)
    expect(branchTwo.getAttribute('data-is-active')).toBe('true')
    expect(branchTwo.getAttribute('data-is-open')).toBe('false')
    // Click it again, and it should be open again, still active
    fireEvent.click(branchTwo)
    expect(branchTwo.getAttribute('data-is-active')).toBe('true')
    expect(branchTwo.getAttribute('data-is-open')).toBe('true')
  })

  it('shows and hides the mobile menu when the "menu" button is clicked', () => {
    render(<DocsSidenav {...defaultProps} />)

    // Get the sidebar nav list
    // (it's the only role=list element with data-is-mobile-open defined)
    const sidebarNavList = screen.getAllByRole('list')[0]
    expect(sidebarNavList.nodeName).toBe('UL')
    expect(sidebarNavList.getAttribute('data-is-mobile-open')).toBe('false')
    // Get the menu button
    const mobileMenuToggle = screen
      .getByText('Documentation Menu')
      .closest('button')
    // Click the menu button, and check the sidebar opens
    fireEvent.click(mobileMenuToggle)
    expect(sidebarNavList.getAttribute('data-is-mobile-open')).toBe('true')
    // Click the menu button again, and check the sidebar closes
    fireEvent.click(mobileMenuToggle)
    expect(sidebarNavList.getAttribute('data-is-mobile-open')).toBe('false')
  })
})
