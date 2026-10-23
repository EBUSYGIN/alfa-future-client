export interface ClientHeaderProps {
  userName: string;
  organizations: { value: string; label: string }[];
  organizationId?: string;
  onOrganizationChange?: (organizationId: string) => void;
  notifications?: { id: string; text: string }[];
}
