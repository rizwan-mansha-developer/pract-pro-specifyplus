/**
 * Simple audit logger for tracking sensitive mutations.
 * In a real scenario, this would log to a database or external service.
 */
export async function logAudit(action: string, metadata: any) {
  console.log(`[AUDIT] ${new Date().toISOString()} - Action: ${action}`, metadata);
}
